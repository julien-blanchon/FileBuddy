<script lang="ts">
  import { scale } from 'svelte/transition';
  import { ClassBuilder } from './classes.js';

  const classesDefault = 'tooltip';
  export let classes: string = classesDefault;
  let className: string = '';
  export { className as class };

  export let show: boolean = false;
  export let timeout: number | null = null;

  const cb = new ClassBuilder(classes, classesDefault);
  $: c = cb.flush().add(classes, true, classesDefault).add(className).get();

  function showTooltip(): void {
    if (show) return;
    show = true;

    if (timeout === null) return;

    timeout = window.setTimeout(() => {
      show = false;
    }, timeout);
  }

  function hideTooltip(): void {
    if (!show) return;

    show = false;
    if (timeout !== null) {
      clearTimeout(timeout);
    }
  }

  /**
   * Debounce function to limit the rate at which a function is executed.
   * @param func - The function to debounce.
   * @param wait - The number of milliseconds to wait before invoking the function.
   * @param immediate - Whether to run the function immediately.
   */
  function debounce<T extends (...args: any[]) => void>(
    func: T,
    wait: number,
    immediate?: boolean
  ): (...args: Parameters<T>) => void {
    let timeout: number | undefined;

    return function (this: any, ...args: Parameters<T>): void {
      const context = this;

      const later = () => {
        timeout = undefined;
        if (!immediate) func.apply(context, args);
      };

      const callNow = immediate && timeout === undefined;
      if (timeout !== undefined) clearTimeout(timeout);
      timeout = window.setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
</script>

<div class="activator">
  <div
    role="note"
    on:mouseenter={debounce(showTooltip, 100)}
    on:mouseleave={debounce(hideTooltip, 100)}
    on:focus={debounce(showTooltip, 100)}
    on:blur={debounce(hideTooltip, 100)}
  >
    <slot name="activator" />
  </div>

  {#if show}
    <div
      in:scale={{ duration: 150 }}
      out:scale={{ duration: 150, delay: 100 }}
      class={c}
    >
      <slot />
    </div>
  {/if}
</div>

<style>
  .tooltip {
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: 0.75rem;
    position: absolute;
    margin-top: 0.5rem;
    background-color: #718096;
    color: #fff;
    border-radius: 0.25rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    z-index: 30;
  }

  .activator {
    position: relative;
    display: inline-block;
  }
</style>