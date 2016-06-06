   <!DOCTYPE html>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

      <link href="/favicon.ico" rel="icon" type="image/x-icon" />
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>

    <body>
      <!--Import jQuery before materialize.js-->
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script type="text/javascript" src="js/materialize.min.js"></script>

    <!-- Navbar goes here -->
 <nav>
    <div class="nav-wrapper green">
      <a href="#!" class="project-8-logo">Project/8</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="competences.html"><i class="material-icons">view_list</i></a></li>
        <li><a href="personnages.html"><i class="material-icons">contacts</i></a></li>
        <li><a href="creation.html"><i class="material-icons">note_add</i></a></li>
        <li><a href="regles.html"><i class="material-icons">settings</i></a></li>
      </ul>
    </div>
  </nav>


    <!-- Page Layout here -->
    <div class="row">

      <div class="col s12 m4 l3"> <!-- Note that "m4 l3" was added -->
        <!-- Grey navigation panel

              This content will be:
          3-columns-wide on large screens,
          4-columns-wide on medium screens,
          12-columns-wide on small screens  -->
          &nbs;
      </div>

      <div class="col s12 m8 l9"> <!-- Note that "m8 l9" was added -->

	{{#each Historiques}}

	 <div class="card small">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src={{this.Image}}>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{{this.Nom}}<i class="material-icons right">more_vert</i></span>
      <p><a href="#">Créer un {{this.Nom}}</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">{{this.Nom}}<i class="material-icons right">close</i></span>
      <p>{{this.Tagline}}</p>
        <a class="btn-floating btn-large waves-effect waves-light green"><i class="material-icons">add</i></a>

    </div>
  </div>

  {{/each}}
    </body>
  </html>