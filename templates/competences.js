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
      <a href="/" class="project-8-logo">Project/8</a>
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
            
        <!-- Teal page content

              This content will be:
          9-columns-wide on large screens,
          8-columns-wide on medium screens,
          12-columns-wide on small screens  -->
        
	 <ul class="collapsible" data-collapsible="accordion">
     {{#each Competences}}
    <li>
      <div class="collapsible-header active"><i class="material-icons">{{this.Icone}}</i>{{this.Nom}}</div>
      <div class="collapsible-body"><p>{{this.Description}}</p></div>
    </li>
    {{/each}}
  </ul>
    </body>
  </html>