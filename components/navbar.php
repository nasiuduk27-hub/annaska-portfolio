<?php
$currentPage = $_GET['page'] ?? 'home';
?>

<header id="header" class="bg-transparent absolute top-0 left-0 w-full z-10 flex items-center transition duration-300">
  <div class="container mx-auto">
    <div class="flex items-center justify-between relative px-4">
      
      <div class="flex-none">
        <a href="index.php?page=home" class="text-lg font-bold text-gray-900 tracking-tighter block py-6">
          Annaskaa<span class="text-brand-purple">.</span>
        </a>
      </div>

      <nav id="nav-menu" class="hidden absolute py-5 bg-white rounded-lg shadow-lg max-w-62.5 w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none lg:flex-1">
        <ul class="flex flex-col lg:flex-row lg:items-center lg:w-full">
          
          <div class="flex flex-col lg:flex-row lg:flex-1 lg:justify-center lg:gap-1">
            <li class="group">
              <a href="index.php?page=home" 
                 class="text-base py-2 mx-3 flex transition duration-300 <?= ($currentPage == 'home') ? 'text-brand-purple font-bold' : 'text-text-dark group-hover:text-brand-purple' ?>">
                Home
              </a>
            </li>
            <li class="group">
              <a href="index.php?page=home#project" 
                 class="text-base text-text-dark py-2 mx-3 flex group-hover:text-brand-purple transition duration-300">
                Project
              </a>
            </li>
            <li class="group">
              <a href="index.php?page=about" 
                 class="text-base py-2 mx-3 flex transition duration-300 <?= ($currentPage == 'about') ? 'text-brand-purple font-bold' : 'text-text-dark group-hover:text-brand-purple' ?>">
                About
              </a>
            </li>
          </div>

         <li class="group">
  <a href="index.php?page=contact" 
     class="text-base py-2 mx-3 flex transition duration-300 <?= ($currentPage == 'contact') ? 'text-brand-purple font-bold' : 'text-text-dark group-hover:text-brand-purple' ?>">

    <!-- Mobile / Hamburger mode -->
    <span class="lg:hidden inline-flex items-center justify-center px-4 py-2 rounded-full bg-brand-purple text-white font-semibold">
      Get in touch
    </span>

    <!-- Desktop / Full wide mode -->
    <svg role="img" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="hidden lg:block fill-current">
      <title>Rocket.Chat</title>
      <path d="M22.909 8.381c-.651-1.01-1.564-1.905-2.71-2.66-2.215-1.457-5.127-2.259-8.197-2.259-1.027 0-2.038.09-3.018.266a9.978 9.978 0 0 0-2.075-1.53C4.11.803 1.646 1.323.4 1.77a.598.598 0 0 0-.233.977c.879.907 2.332 2.698 1.974 4.327C.753 8.493 0 10.203 0 11.982c0 1.815.752 3.524 2.142 4.942.357 1.63-1.096 3.421-1.975 4.328a.597.597 0 0 0 .233.977c1.245.448 3.71.968 6.508-.427a10.031 10.031 0 0 0 2.075-1.53 17.06 17.06 0 0 0 3.018.265c3.071 0 5.983-.801 8.197-2.257 1.147-.755 2.06-1.65 2.71-2.661C23.633 14.493 24 13.28 24 12.017c.001-1.297-.366-2.508-1.091-3.636zM11.875 18.437c-1.328 0-2.594-.171-3.748-.48l-.844.81a7.716 7.716 0 0 1-1.556 1.154 6.118 6.118 0 0 1-2.2.621c.042-.074.079-.149.119-.224.844-1.553 1.073-2.948.683-4.186-1.382-1.086-2.212-2.476-2.212-3.99 0-3.476 4.369-6.294 9.757-6.294s9.757 2.818 9.757 6.294c.001 3.477-4.367 6.295-9.756 6.295zm-3.229-6.315c0 .788-.644 1.427-1.438 1.427a1.433 1.433 0 0 1-1.438-1.427c0-.788.644-1.426 1.438-1.426.794 0 1.438.638 1.438 1.426zm4.627 0c0 .788-.644 1.427-1.438 1.427a1.433 1.433 0 0 1-1.438-1.427c0-.788.644-1.426 1.438-1.426.794 0 1.438.638 1.438 1.426zm4.63 0c0 .788-.645 1.427-1.439 1.427a1.433 1.433 0 0 1-1.438-1.427c0-.788.644-1.426 1.438-1.426.794 0 1.438.638 1.438 1.426z"/>
    </svg>

  </a>
</li>
        </ul>
      </nav>

      <div class="flex items-center lg:hidden">
        <button id="hamburger" name="hamburger" type="button" class="block">
          <span class="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
          <span class="hamburger-line transition duration-300 ease-in-out"></span>
          <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
        </button>
      </div>

    </div>
  </div>
</header>