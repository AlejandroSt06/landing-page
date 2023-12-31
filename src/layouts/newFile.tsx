import { Astro } from "./Layout.astro";

<Fragment>
<html lang="en" {...{ "data-bs-theme": "light" }}>
<head>
<meta charset="UTF-8" />
<meta name="description" content="Astro description" />
<meta name="viewport" content="width=device-width" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz@10..48&family=Fredoka&family=Koulen&family=Montserrat&family=Nunito&family=Nunito+Sans:opsz@6..12&family=Open+Sans&family=Playfair+Display:ital@1&family=Poppins:ital@1&family=Quicksand&family=Raleway&family=Roboto&display=swap" rel="stylesheet" />

<meta name="generator" content={Astro.generator} />
<title>{title}</title>
</head>
<body>
<slot />
<script src="./atropos/atropos.min.js"></script>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
</body>
</html>
<style is: global>{`
	:root {
		--accent: 136, 58, 234;
		--accent-light: 224, 204, 250;
		--accent-dark: 49, 10, 101;
		--accent-gradient: linear-gradient(
			45deg,
			rgb(var(--accent)),
			rgb(var(--accent-light)) 30%,
			white 60%
		);
	}

	code {
		font-family:
			Menlo,
			Monaco,
			Lucida Console,
			Liberation Mono,
			DejaVu Sans Mono,
			Bitstream Vera Sans Mono,
			Courier New,
			monospace;
	}
	body {
		/* font-family: "Bricolage Grotesque", sans-serif;
		font-family: "Fredoka", sans-serif;
		font-family: "Koulen", cursive;
		font-family: "Montserrat", sans-serif;
		
		font-family: "Nunito Sans", sans-serif;
		font-family: "Open Sans", sans-serif;
		font-family: "Playfair Display", serif;
		font-family: "Poppins", sans-serif;
		font-family: "Quicksand", sans-serif;
		font-family: "Raleway", sans-serif;
		font-family: "Roboto", sans-serif;
		font-family: "Nunito", sans-serif; */

				font-family: "Bricolage Grotesque", sans-serif;
		font-family: "Fredoka", sans-serif;
		font-family: "Koulen", cursive;
		font-family: "Montserrat", sans-serif;
		
		font-family: "Nunito Sans", sans-serif;
		font-family: "Open Sans", sans-serif;
		


	}

	/* Personalizza la scrollbar */
	/* Parte della scrollbar stessa */
	::-webkit-scrollbar {
		width: 10px; /* Larghezza della scrollbar */
	}

	/* Parte del "pollice" (thumb) della scrollbar */
	::-webkit-scrollbar-thumb {
		background-color: #888; /* Colore del thumb */
		border-radius: 5px; /* Bordo arrotondato */
	}

	/* Parte di sfondo della scrollbar (traccia) */
	::-webkit-scrollbar-track {
		background-color: #f1f1f1; /* Colore della traccia */
	}

	/* Cambia colore quando si passa sopra alla scrollbar */
	::-webkit-scrollbar-thumb:hover {
		background-color: #555; /* Colore del thumb al passaggio del mouse */
	}
`}</style>

</Fragment>;
