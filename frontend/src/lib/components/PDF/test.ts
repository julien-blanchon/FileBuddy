import type { PdfContentChunk } from "./types";

export const example: PdfContentChunk[] = [
    {
        "id": 1,
        "bbox": {
            left: 187,
            top: 78.89,
            width: 233.77,
            height: 32
        },
        "content": "# Demande de Visa pour un d\u00e9partement ou une collectivit\u00e9 d'outre-mer",
        "page": 1
    },
    {
        "id": 2,
        "bbox": {
            left: 31,
            top: 85.89,
            width: 502.42,
            height: 270.5
        },
        "content": "PHOTO\n\nLlbertd Egalttt Prartrnile\n\nREPUBLIQUE FRANCAJSE\n\nArt L211-1 et L611-6 du Code de l'entr\u00e9e et du s\u00e9jour des \u00e9trangers et du droit d'asile\n\nCe formulaire est valable pour : la Guadeloupe, la Guyane, la Martinique, La R\u00e9union, Mayotte, La Nouvelle-Cal\u00e9donie, La Polyn\u00e9sie fran\u00e7aise, Saint-Barth\u00e9lemy, Saint-Martin, Saint-Pierre-et-Miquelon, les Terres Australes et Antarctiques Fran\u00e7aises et les \u00eeles de Wallis-et-Futuna\n\n1. Nom(s) [nom(s) de famille] (1) :\n2. Nom(s) de naissance [nom(s) de famille ant\u00e9rieur(s)] (1) :\n3. Pr\u00e9nom(s) (1) :\n4. Date de naissance (jour-mois-ann\u00e9e) :\n5. Lieu de naissance :\n6. Pays de naissance :\n7. Nationalit\u00e9 actuelle :\n8. Nationalit\u00e9 \u00e0 la naissance, si diff\u00e9rente :\n9. Sexe :\n10. \u00c9tat Civil :\n11. Pour les mineurs : Nom, pr\u00e9nom, adresse (si diff\u00e9rente de celle du demandeur) et nationalit\u00e9 de l'autorit\u00e9 parentale/ du tuteur l\u00e9gal",
        "page": 1
    },
    {
        "id": 3,
        "bbox": {
            left: 439,
            top: 166.89,
            width: 111.59,
            height: 8
        },
        "content": "# Partie r\u00e9serv\u00e9e \u00e0 l'administration",
        "page": 1
    },
    {
        "id": 4,
        "bbox": {
            left: 41,
            top: 178.89,
            width: 509.44,
            height: 368.5
        },
        "content": "Date d'introduction de la demande :\n\nNum\u00e9ro de la demande de visa :\n\nResponsable du dossier :\n\nDemande introduite :\n\n- c Aupr\u00e8s d'une ambassade/ d'un consulat\n- c Aupr\u00e8s d'une pr\u00e9fecture\n- c Aupr\u00e8s du CAC\n- c Aupr\u00e8s d'un prestataire de services\n- c Aupr\u00e8s d'un interm\u00e9diaire commercial\n- c \u00e0 la fronti\u00e8re\n- Nom :\n- c autres\n\nNum\u00e9ro national d'identit\u00e9, le cas \u00e9ch\u00e9ant :\nType de document de voyage :\n- c Passeport ordinaire\n- c Passeport diplomatique\n- c Passeport de service\n- c Passeport officiel\n- c Passeport sp\u00e9cial\n- c Autre document de voyage (\u00e0 pr\u00e9ciser) :\n\nNum\u00e9ro du document de voyage :\nDate de d\u00e9livrance :\nDate d'expiration :\nD\u00e9livr\u00e9 par :\n\nAdresse du domicile et adresse \u00e9lectronique du demandeur :\n\nNum\u00e9ro(s) de t\u00e9l\u00e9phone :",
        "page": 1
    },
    {
        "id": 5,
        "bbox": {
            left: 439,
            top: 395.89,
            width: 75.64,
            height: 8
        },
        "content": "# Documents justificatifs :",
        "page": 1
    },
    {
        "id": 6,
        "bbox": {
            left: 439,
            top: 371.89,
            width: 101.94,
            height: 174
        },
        "content": "- c Document de voyage\n- c Moyens de subsistance\n- c Invitation\n- c Moyen de transport\n- c Assurance maladie en voyage\n- c Autres :",
        "page": 1
    },
    {
        "id": 7,
        "bbox": {
            left: 439,
            top: 501.89,
            width: 89.04,
            height: 8
        },
        "content": "# D\u00e9cision concernant le visa :",
        "page": 1
    },
    {
        "id": 8,
        "bbox": {
            left: 31,
            top: 513.89,
            width: 505.27,
            height: 256
        },
        "content": "- c Refus\u00e9\n- c D\u00e9livr\u00e9\n- c A\n- c C\n- c VTL\n\nR\u00e9sidence dans un pays autre que celui de la nationalit\u00e9 actuelle :\n- Valable :\n- c Non\n- c Oui : Autorisation de s\u00e9jour ou \u00e9quivalent N\u00b0 \u2026....................................... Date d'expiration \u2026..................  du \u2026.............................................\n\nProfession actuelle au \u2026..................................................\nNom, adresse et num\u00e9ro de t\u00e9l\u00e9phone de l'employeur. Pour les \u00e9tudiants, adresse de l'\u00e9tablissement d'enseignement :\nNombre de jours : \u2026.................\nNombre d'entr\u00e9es :\n- c 1\n- c 2\n- c Multiples\n\nObjet(s) principal(aux) du voyage :\n- c Tourisme\n- c Affaires\n- c Visite \u00e0 la famille ou \u00e0 des amis\n- c Culture\n- c Sports\n- c Visite officielle\n- c \u00c9tudes\n- c Raisons m\u00e9dicales\n- c Transit\n- c Transit a\u00e9roportuaire\n- c Autre (\u00e0 pr\u00e9ciser) :\n\n(1) Les donn\u00e9es des cases 1 \u00e0 3 doivent correspondre aux donn\u00e9es figurant sur le document de voyage.",
        "page": 1
    },
    {
        "id": 9,
        "bbox": {
            left: 33,
            top: 43.89,
            width: 98.55,
            height: 8.5
        },
        "content": "# 22. Territoires de destination :",
        "page": 2
    },
    {
        "id": 10,
        "bbox": {
            left: 303,
            top: 43.89,
            width: 110.75,
            height: 8.5
        },
        "content": "# 23. Territoire de premi\u00e8re entr\u00e9e :",
        "page": 2
    },
    {
        "id": 11,
        "bbox": {
            left: 33,
            top: 131.89,
            width: 114.05,
            height: 8.5
        },
        "content": "# 24. Nombre d'entr\u00e9es demand\u00e9es :",
        "page": 2
    },
    {
        "id": 13,
        "bbox": {
            left: 303,
            top: 130.89,
            width: 129.91,
            height: 8.5
        },
        "content": "# 25. Dur\u00e9e du s\u00e9jour ou du transit pr\u00e9vu",
        "page": 2
    },
    {
        "id": 14,
        "bbox": {
            left: 303,
            top: 140.89,
            width: 96.35,
            height: 8.5
        },
        "content": "Indiquer le nombre de jours :",
        "page": 2
    },
    {
        "id": 15,
        "bbox": {
            left: 33,
            top: 164.89,
            width: 364.35,
            height: 8.5
        },
        "content": "# 26. Visas pour la France (m\u00e9tropolitaine ou territoire d'outre-mer) d\u00e9livr\u00e9s au cours des trois derni\u00e8res ann\u00e9es :",
        "page": 2
    },
    {
        "id": 16,
        "bbox": {
            left: 45,
            top: 176.89,
            width: 414.17,
            height: 23.5
        },
        "content": "c Non\n\nc Oui. Dates(s) de validit\u00e9 \u2026................/\u2026..............., \u2026................../\u2026.................., \u2026................../ \u2026...............",
        "page": 2
    },
    {
        "id": 17,
        "bbox": {
            left: 33,
            top: 207.89,
            width: 316.35,
            height: 8.5
        },
        "content": "# 27. Empreintes digitales relev\u00e9es pr\u00e9c\u00e9demment aux fins d'une demande de visa pour la France :",
        "page": 2
    },
    {
        "id": 18,
        "bbox": {
            left: 45,
            top: 176.89,
            width: 27.22,
            height: 8.5
        },
        "content": "c Non\n\nc Oui. Date, si elle est connue : \u2026............\u2026.................................\u2026...................................\u2026....................................",
        "page": 2
    },
    {
        "id": 19,
        "bbox": {
            left: 33,
            top: 237.89,
            width: 243.55,
            height: 8.5
        },
        "content": "# 28. Autorisation d'entr\u00e9e dans le pays de destination finale, le cas \u00e9ch\u00e9ant :",
        "page": 2
    },
    {
        "id": 20,
        "bbox": {
            left: 43,
            top: 249.89,
            width: 501.02,
            height: 8.5
        },
        "content": "D\u00e9livr\u00e9e par \u2026......................................\u2026............................................................................\u2026................................... , valable du. \u2026..................... au \u2026.....................",
        "page": 2
    },
    {
        "id": 21,
        "bbox": {
            left: 33,
            top: 267.89,
            width: 165.15,
            height: 8.5
        },
        "content": "# 29. Date d'arriv\u00e9e pr\u00e9vue sur le territoire fran\u00e7ais :",
        "page": 2
    },
    {
        "id": 22,
        "bbox": {
            left: 302,
            top: 267.89,
            width: 158.74,
            height: 8.5
        },
        "content": "# 30. Date de d\u00e9part pr\u00e9vue du territoire fran\u00e7ais :",
        "page": 2
    },
    {
        "id": 23,
        "bbox": {
            left: 33,
            top: 299.89,
            width: 515.94,
            height: 17.5
        },
        "content": "# *31. Nom et pr\u00e9nom de la ou des personnes qui invitent dans le ou les territoires d'outre-mer de destination. A d\u00e9faut, nom d'un ou des h\u00f4tels ou adresses(s) temporaire(s) dans le ou les territoires de destination :",
        "page": 2
    },
    {
        "id": 24,
        "bbox": {
            left: 33,
            top: 346.89,
            width: 514.55,
            height: 8.5
        },
        "content": "Adresse et adresse \u00e9lectronique de la ou des personnes qui invitent/du ou des h\u00f4tels/du ou des lieux d'h\u00e9bergement temporaire : T\u00e9l\u00e9phone et t\u00e9l\u00e9copieur :",
        "page": 2
    },
    {
        "id": 25,
        "bbox": {
            left: 33,
            top: 466.89,
            width: 181.15,
            height: 8.5
        },
        "content": "# *32. Nom et adresse de l'organisation/entreprise h\u00f4te :",
        "page": 2
    },
    {
        "id": 26,
        "bbox": {
            left: 33,
            top: 466.89,
            width: 520.56,
            height: 76.5
        },
        "content": "T\u00e9l\u00e9phone et t\u00e9l\u00e9copieur de l'entreprise/organisation :\n\nNom, pr\u00e9nom, adresse, t\u00e9l\u00e9phone, t\u00e9l\u00e9copieur et adresse \u00e9lectronique de la personne de contact dans l'entreprise/organisation :",
        "page": 2
    },
    {
        "id": 27,
        "bbox": {
            left: 33,
            top: 614.89,
            width: 239.75,
            height: 8.5
        },
        "content": "# *33. Les frais de voyage et subsistance durant votre s\u00e9jour sont financ\u00e9s :",
        "page": 2
    },
    {
        "id": 28,
        "bbox": {
            left: 36,
            top: 637.89,
            width: 510.15,
            height: 112.5
        },
        "content": "c par vous-m\u00eame\n\nc par un garant (h\u00f4te, entreprise, organisation), veuillez pr\u00e9ciser\n\nMoyens de subsistance :\n\nc vis\u00e9 dans les cases 31 ou 32\n\nc Argent liquide\n\nc autres (\u00e0 pr\u00e9ciser) : \u2026\u2026\u2026\u2026..\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.\n\nc Ch\u00e8ques de voyage\n\nc Carte de cr\u00e9dit\n\nc H\u00e9bergement pr\u00e9pay\u00e9\n\nc Transport pr\u00e9pay\u00e9\n\nc Autres (\u00e0 pr\u00e9ciser) :\n\nc H\u00e9bergement fourni\n\nc Tous les frais sont financ\u00e9s pendant le s\u00e9jour\n\nc Transport pay\u00e9\n\nc Autres (\u00e0 pr\u00e9ciser) :",
        "page": 2
    },
    {
        "id": 29,
        "bbox": {
            left: 34,
            top: 69.89,
            width: 448.95,
            height: 8.5
        },
        "content": "# 34. Donn\u00e9es personnelles du membre de la famille qui est ressortissant de l'Union Europ\u00e9enne, de l'EEE ou de la Conf\u00e9d\u00e9ration suisse :",
        "page": 3
    },
    {
        "id": 30,
        "bbox": {
            left: 34,
            top: 89.89,
            width: 523.95,
            height: 40.5
        },
        "content": "Nom :                                                                                                            Pr\u00e9nom(s) :\n\nDate de naissance :                           Nationalit\u00e9 :                                                                                   Num\u00e9ro du document de voyage ou de la carte d'identit\u00e9 :",
        "page": 3
    },
    {
        "id": 31,
        "bbox": {
            left: 34,
            top: 150.89,
            width: 349.05,
            height: 8.5
        },
        "content": "# 35. Lien de parent\u00e9 avec un ressortissant de l'Union Europ\u00e9enne, de l'EEE ou de la Conf\u00e9d\u00e9ration suisse :",
        "page": 3
    },
    {
        "id": 32,
        "bbox": {
            left: 46,
            top: 163.89,
            width: 323.98,
            height: 8.5
        },
        "content": "c  Conjoint                  c Enfant                     c Petit-fils ou petite-fille                    c Ascendant \u00e0 charge",
        "page": 3
    },
    {
        "id": 33,
        "bbox": {
            left: 34,
            top: 185.89,
            width: 54.45,
            height: 354.5
        },
        "content": "# 36. Lieu et date :",
        "page": 3
    },
    {
        "id": 34,
        "bbox": {
            left: 197,
            top: 185.89,
            width: 261.9,
            height: 8.5
        },
        "content": "# 37. Signature (pour les mineurs, signature de l'autorit\u00e9 parentale/du tuteur l\u00e9gal)",
        "page": 3
    },
    {
        "id": 35,
        "bbox": {
            left: 34,
            top: 231.89,
            width: 528.67,
            height: 308.5
        },
        "content": "Je suis inform\u00e9(e) que les droits de visa ne sont pas rembours\u00e9s si le visa est refus\u00e9.\n\nEn connaissance de cause, j\u2019accepte ce qui suit : aux fins de l\u2019examen de ma demande de visa, il y a lieu de recueillir les donn\u00e9es requises dans ce formulaire, de me photographier et, le cas \u00e9ch\u00e9ant, de prendre mes empreintes digitales. Les donn\u00e9es \u00e0 caract\u00e8re personnel me concernant qui figurent dans le pr\u00e9sent formulaire de demande de visa, ainsi que mes empreintes digitales et ma photo, seront communiqu\u00e9es aux autorit\u00e9s fran\u00e7aises comp\u00e9tentes et trait\u00e9es par elles, aux fins de la d\u00e9cision relative \u00e0 ma demande de visa.\n\nCes donn\u00e9es ainsi que celles concernant la d\u00e9cision relative \u00e0 ma demande de visa, ou toute d\u00e9cision d\u2019annulation ou d\u2019abrogation du visa, seront saisies et conserv\u00e9es dans la base fran\u00e7aise des donn\u00e9es biom\u00e9triques VISABIO pendant une p\u00e9riode maximale de cinq ans, durant laquelle elles seront accessibles aux autorit\u00e9s charg\u00e9es des visas, aux autorit\u00e9s comp\u00e9tentes charg\u00e9es de contr\u00f4ler les visas aux fronti\u00e8res, aux autorit\u00e9s nationales comp\u00e9tentes en mati\u00e8re d\u2019immigration et d\u2019asile aux fins de la v\u00e9rification du respect des conditions d'entr\u00e9e et de s\u00e9jour r\u00e9guliers sur le territoire de la France, aux fins de l'identification des personnes qui ne remplissent pas ou plus ces conditions. Dans certaines conditions, ces donn\u00e9es seront aussi accessibles aux autorit\u00e9s fran\u00e7aises d\u00e9sign\u00e9es et \u00e0 Europol aux fins de la pr\u00e9vention et de la d\u00e9tection des infractions terroristes et des autres infractions p\u00e9nales graves, ainsi que dans la conduite des enqu\u00eates s\u2019y rapportant.\n\nLes autorit\u00e9s fran\u00e7aises comp\u00e9tentes pour le traitement des donn\u00e9es sont le Minist\u00e8re de l\u2019Int\u00e9rieur (Place Beauvau - 75800 Paris CEDEX 08) et le Minist\u00e8re de l\u2019Europe et des Affaires \u00c9trang\u00e8res (27 rue de la Convention \u2013 75732 PARIS Cedex 15).\n\nEn application des articles 39 \u00e0 43 quinquies et 70-18 \u00e0 70-27 de la loi n\u00b0 78-17 du 6 janvier 1978 modifi\u00e9e relative \u00e0 l\u2019informatique, aux fichiers et aux libert\u00e9s, je suis inform\u00e9(e) de mon droit d\u2019obtenir aupr\u00e8s de l\u2019\u00c9tat fran\u00e7ais communication des informations me concernant qui sont enregistr\u00e9es dans la base VISABIO et de mon droit de demander que ces donn\u00e9es soient rectifi\u00e9es si elles sont erron\u00e9es, ou \u00e9ventuellement effac\u00e9es seulement si elles ont \u00e9t\u00e9 trait\u00e9es de fa\u00e7on illicite. Ce droit d\u2019acc\u00e8s et de rectification \u00e9ventuelle s\u2019exerce aupr\u00e8s du chef de poste. La Commission nationale de l\u2019Informatique et des Libert\u00e9s (CNIL) - 3 Place de Fontenoy \u2013 TSA 80715 - 75334 PARIS CEDEX 07 - peut \u00e9ventuellement \u00eatre saisie si j\u2019entends contester les conditions de protection des donn\u00e9es \u00e0 caract\u00e8re personnel me concernant.\n\nJe suis inform\u00e9(e) que tout dossier incomplet accro\u00eet le risque de refus de ma demande de visa par l'autorit\u00e9 consulaire et que celle-ci peut \u00eatre amen\u00e9e \u00e0 conserver mon passeport pendant le d\u00e9lai de traitement de ma demande.\n\nJe d\u00e9clare qu\u2019\u00e0 ma connaissance, toutes les indications que j\u2019ai fournies sont correctes et compl\u00e8tes. Je suis inform\u00e9(e) que toute fausse d\u00e9claration entra\u00eenera le rejet de ma demande ou l\u2019annulation du visa s\u2019il a d\u00e9j\u00e0 \u00e9t\u00e9 d\u00e9livr\u00e9, et sera susceptible d\u2019entra\u00eener des poursuites p\u00e9nales \u00e0 mon \u00e9gard en application du droit fran\u00e7ais. Je suis inform\u00e9(e) que le silence gard\u00e9 par l\u2019administration plus de deux mois apr\u00e8s le d\u00e9p\u00f4t de ma demande attest\u00e9 par la remise d\u2019une quittance vaut d\u00e9cision implicite de rejet. Cette d\u00e9cision pourra \u00eatre contest\u00e9e aupr\u00e8s de la Commission des recours contre les d\u00e9cisions de refus de visa, BP 83.609, 44036 Nantes CEDEX 1, dans un d\u00e9lai de deux mois suivant la naissance de la d\u00e9cision implicite.\n\nJe m\u2019engage \u00e0 quitter le territoire fran\u00e7ais avant l\u2019expiration du visa, si celui-ci m\u2019a \u00e9t\u00e9 d\u00e9livr\u00e9, et si je n\u2019ai pas obtenu le droit de s\u00e9journer en France au-del\u00e0 de cette dur\u00e9e.\n\nLieu et date :",
        "page": 3
    },
    {
        "id": 36,
        "bbox": {
            left: 198,
            top: 531.89,
            width: 254.25,
            height: 8.5
        },
        "content": "# Signature (pour les mineurs, signature de l'autorit\u00e9 parentale/du tuteur l\u00e9gal) :",
        "page": 3
    },
    {
        "id": 37,
        "bbox": {
            left: 37,
            top: 569.89,
            width: 520.3,
            height: 252
        },
        "content": "Les rubriques assorties d\u2019un * ne doivent pas \u00eatre remplies par les membres de la famille de ressortissants de l\u2019Union europ\u00e9enne, de l\u2019EEE ou de la Conf\u00e9d\u00e9ration suisse (conjoint, enfant ou ascendant d\u00e9pendant) dans l\u2019exercice de leur droit \u00e0 la libre circulation. Les membres de la famille de ressortissants de l\u2019Union europ\u00e9enne, de l\u2019EEE ou de la Conf\u00e9d\u00e9ration suisse doivent pr\u00e9senter les documents qui prouvent ce lien de parent\u00e9 et remplissent les cases n\u00b0 34 et 35.\n\nLa demande de visa pour un d\u00e9partement ou une collectivit\u00e9 d\u2019outre-mer rel\u00e8ve des exceptions \u00e0 la saisine par voie \u00e9lectronique (D\u00e9cret n\u00b02015-1423 du 5 novembre 2015 relatif aux exceptions \u00e0 l\u2019application du droit des usagers de saisir l\u2019administration par voie \u00e9lectronique).\n\n3/3",
        "page": 3
    }
]