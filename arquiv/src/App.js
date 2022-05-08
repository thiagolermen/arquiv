import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
    <div className="App">
      <div class="alert-fixed alert alert-dark" role="alert" id="daleson2">
            alguma coisa
      </div>

      <div id="header">
        <div class="navbar" id="ufrgsnavbar">
            <a class="navbar-brand">
                <img class="card-img-top" style="width: 70px; margin-left: 25%" src="assets/ufrgs.png" alt="Card image cap">
                <a class="navbar-brand"  style="margin-right: 40%;">Universidade Federal do Rio Grande do Sul</a>
            </a>
        </div>

        <nav class="navbar navbar-expand-lg navbar-dark" id="arquivnavbar">
            <div class="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNav">
                <ul class="navbar-nav" id="about">
                    <li class="nav-item">
                        <a class="nav-link active" href="src/login.html">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="src/cadastro.html">Cadastro</a>
                    </li>
                </ul>
            </div>
        </nav>

        <nav class="navbar navbar-expand-lg navbar-dark" id="arquivnavbar_logged">
            <div class="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNav">
                <ul class="navbar-nav container-fluid" style="float: left">
                    <li class="nav-item">
                        <a class="nav-link active" href="src/submissao.html">Submeter</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="src/meus_artigos.html">Meus artigos</a>
                    </li>
                </ul>
                <ul class="navbar-nav" id="about">
                    <li class="nav-item">
                        <a class="nav-link active" href="" id="nome_logadasso">Nome</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Sair</a>
                    </li>
                </ul>
            </div>
        </nav>
      </div>


      <main role="main" id="bg">
          <div class="jumbotron vertical-center" style="width: 100%"> <!-- 
              ^--- Added class  -->
              <div class="container">
                  <img class="center" src="assets/logo.png" href="#" alt="main logo">
              </div>
              <div class="input-group mb-3" id="main_search">
                  <input type="text" class="form-control border-dark" placeholder="Buscar" aria-label="Username">
                  <div class="dropdown">
                      <button class="btn btn-light dropdown-toggle border-dark" type="button" data-toggle="dropdown" id="BAGULHO">Todos os campos
                      <span class="caret"></span></button>
                      <ul class="dropdown-menu">
                        <li classs="main_dropdown"><a href="#">Título</a></li>
                        <li classs="main_dropdown"><a href="#" onclick=trocarbagulho()>Autor</a></li>
                      </ul>
                  </div>
                  <button class="btn btn-default border-dark" style="background-color: var(--primary)" onclick="location.href='src/resultados.html';">
                      <img src="assets/search-icon.png"/>
                  </button>   
              </div>
              <ul class="list-inline" style="margin-left: 30.5%;">
                  <li class="list-inline-item">Tópicos: </li>
                  <li class="list-inline-item"><a href="src/subtopicos_fisica.html" class="link-dark">Física</a></li>
                  <li class="list-inline-item"><a href="src/subtopicos_matematica.html" class="link-dark">Matemática</a></li>
                  <li class="list-inline-item"><a href="src/subtopicos_computacao.html" class="link-dark">Ciência da Computação</a></li>
              </ul>
          </div>
      </main>
      <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
      ></script>
      <script src="js/bootstrap.min.js"></script>
      <script>


        function trocarbagulho(){
            document.getElementById("BAGULHO").innerHTML = "Autor";
        }

        window.onload = function hideLoggedInOptions(){
            var isLoggedIn = sessionStorage.getItem('isLoggedIn');
            if(isLoggedIn !== "false"){
                console.log(isLoggedIn)
                document.getElementById("nome_logadasso").innerHTML = isLoggedIn;
                document.getElementById("arquivnavbar").style.display = "none";
                document.getElementById("arquivnavbar_logged").style.visibility = "visible";

                console.log("FOI")
                var tempLogin = sessionStorage.getItem('tempLogin');
                var tempUser = sessionStorage.getItem('tempUser');
                var tempSub = sessionStorage.getItem('tempSub');


                console.log(tempLogin)

                document.getElementById("daleson2").style.display = "none"

                if(tempUser != ''){
                    document.getElementById("daleson2").style.display = "inline"
                    document.getElementById("daleson2").style.visibility = "visible"
                    document.getElementById("daleson2").innerHTML = "Conta criada"
                } else if(tempLogin != ''){
                    document.getElementById("daleson2").style.display = "inline"
                    document.getElementById("daleson2").style.visibility = "visible"
                    document.getElementById("daleson2").innerHTML = "Login efetuado como " + tempLogin
                } else if(tempSub != ''){
                    document.getElementById("daleson2").style.display = "inline"
                    document.getElementById("daleson2").style.visibility = "visible"
                    document.getElementById("daleson2").innerHTML = "Artigo " + tempSub + " submetido"
                }

                sessionStorage.setItem('tempLogin', '');
                sessionStorage.setItem('tempUser', '');
                sessionStorage.setItem('tempSub', '');

            } else {
                console.log("ENTROU")

                document.getElementById("daleson2").style.display = "none"


                var tempLogin = sessionStorage.getItem('tempLogin');
                var tempUser = sessionStorage.getItem('tempUser');

                if(tempUser != ''){
                    document.getElementById("daleson2").style.display = "inline"
                    document.getElementById("daleson2").style.visibility = "visible"
                    document.getElementById("daleson2").innerHTML = "Conta criada"
                } else if(tempLogin != ''){
                    document.getElementById("daleson2").style.display = "inline"
                    document.getElementById("daleson2").style.visibility = "visible"
                    document.getElementById("daleson2").innerHTML = "Login efetuado como " + tempLogin
                }


                document.getElementById("arquivnavbar").style.visibility = "visible";
                document.getElementById("arquivnavbar_logged").style.display = "none";
            }


            var duration = 2000; //2 seconds
            setTimeout(function () { document.getElementById("daleson2").style.display="none"; }, duration);
        }
    </script>
    </div>
    </Router>
  );
}

export default App;
