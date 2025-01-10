<!-- <script>
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterLink,
    FooterIcon,
  } from "flowbite-svelte";
  import { GithubSolid, LinkedinSolid } from "flowbite-svelte-icons";
  import { Link } from "svelte-routing";
</script>

<Footer
  class="px-2 sm:px-4 py-2.5 w-full bg-shakespeare-50 shadow-xl border-t"
>
  <FooterCopyright
    aClass="text-shakespeare-border hover:text-shakespeare-200"
    href="/"
    by="Clément Massit"
    year={2023}
  />

  <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
    <FooterLink
      aClass="text-shakespeare-700 hover:text-shakespeare-200"
      href="/">Clément</FooterLink
    >
    <FooterLink
      aClass="text-shakespeare-700 hover:text-shakespeare-200"
      href="/Projects"
      ><Link
        to="/Projects"
        class=" text-shakespeare-700 hover:text-shakespeare-200">Projects</Link
      ></FooterLink
    >
    <FooterLink
      aClass="text-shakespeare-700 hover:text-shakespeare-200"
      href="/About"
      ><Link
        to="/About"
        class=" text-shakespeare-700 hover:text-shakespeare-200">About</Link
      ></FooterLink
    >
  </FooterLinkGroup>
  <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
    <FooterIcon
      href="https://www.linkedin.com/in/cl%C3%A9ment-massit/"
      target="_blank"
    >
      <LinkedinSolid
        class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-shakespeare-border dark:hover:text-white"
      />
    </FooterIcon>
    <FooterIcon href="https://github.com/clement-massit" target="_blank">
      <GithubSolid
        class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-shakespeare-border dark:hover:text-white"
      />
    </FooterIcon>
    <FooterIcon href="https://www.instagram.com/clem_massit/">
      <a
        target="_blank"
        href="https://www.instagram.com/clem_massit/"
        class="text-gray-500 dark:text-gray-500 hover:text-shakespeare-border dark:hover:text-white"
      >
        <svg
          class="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </FooterIcon>
  </div>
</Footer> -->

<script>
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterLink,
    FooterIcon,
  } from "flowbite-svelte";
  import { GithubSolid, LinkedinSolid } from "flowbite-svelte-icons";

  import logo from "../static/logo.png";

  // Vous pouvez ajouter des données dynamiques ici, si nécessaire
  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div class="footer-links">
        <a href="/">Home</a>
        <a href="/Projects">Projects</a>
        <a href="/About">About</a>
      </div>
      <div class="footer-social">
        <FooterIcon
          href="https://www.linkedin.com/in/cl%C3%A9ment-massit/"
          target="_blank"
        >
          <LinkedinSolid
            class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-shakespeare-border dark:hover:text-white"
          />
        </FooterIcon>
        <FooterIcon href="https://github.com/clement-massit" target="_blank">
          <GithubSolid
            class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-shakespeare-border dark:hover:text-white"
          />
        </FooterIcon>
        <FooterIcon href="https://www.instagram.com/clem_massit/">
          <a
            target="_blank"
            href="https://www.instagram.com/clem_massit/"
            class="text-gray-500 dark:text-gray-500 hover:text-shakespeare-border dark:hover:text-white"
          >
            <svg
              class="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </FooterIcon>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {currentYear} Clément Massit</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: #2c3e50;
    color: #ecf0f1;
    padding: 20px 0;
    font-size: 14px;
    margin-top: 100px;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }
  .footer-logo img {
    max-height: 50px;
  }
  .footer-links a {
    color: #ecf0f1;
    text-decoration: none;
    margin: 0 10px;
    transition: color 0.3s;
  }
  .footer-links a:hover {
    color: #3498db;
  }
  .footer-social {
    color: #ecf0f1;
    font-size: 18px;
    transition: color 0.3s;
    display: block;
  }

  .footer-social a:hover {
    color: #3498db;
  }
  .footer-bottom {
    text-align: center;
    border-top: 1px solid #34495e;
    padding-top: 10px;
    width: 100%;
  }
</style>
