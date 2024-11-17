<script>
  import Dropzone from "svelte-file-dropzone";

  let files = {
    accepted: [],
    rejected: [],
  };

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = [...files.rejected, ...fileRejections];
  }

  function handleRemoveFile(e, index) {
    files.accepted.splice(index, 1);
    files.accepted = [...files.accepted];
  }
  function handleRemoveAll() {
    files.accepted = [];
  }
</script>

<Dropzone on:drop={handleFilesSelect} accept={["image/*"]} containerClasses="bg-[hsl(var(--background))] flex flex-1 h-[86%] mt-5 flex-col items-center text-gray-400 outline-none transition-border duration-200 ease-in-out border border-primary border-dashed" disableDefaultStyles>
  <div class="flex flex-col items-center justify-center h-full">
    <button>Choose pdf to upload</button>
    <p>or</p>
    <p>Drag and drop them here</p>
  </div>
</Dropzone>
<div style="margin: 5px;">
  {#if files.accepted.length > 0}
    <button on:click={handleRemoveAll}>RemoveAll</button>
  {/if}
  {#each files.accepted as item, index}
    <div>
      <span>{item.name}</span>
      <button on:click={(e) => handleRemoveFile(e, index)}>Remove</button>
    </div>
  {/each}
</div>