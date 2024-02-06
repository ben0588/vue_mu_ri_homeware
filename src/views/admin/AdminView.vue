<template>
  <header>
    <nav class="navbar bg-light">
      <div class="container-fluid bg-dark py-2">
        <a class="navbar-brand text-white">沐日家居管理後台</a>
        <ul class="list-unstyled d-flex justify-content-center align-items-center m-0">
          <li><router-link class="text-white p-2" to="/admin">後臺-首頁 |</router-link></li>
          <li><router-link class="text-white p-2" to="/admin/dashboard"> 儀板表 |</router-link></li>
          <li><router-link class="text-white p-2" to="/"> 回到前台</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
  <router-view></router-view>
</template>
