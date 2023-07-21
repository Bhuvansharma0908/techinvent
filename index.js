const clusterdetails = {'engineering':{'x':230,'y':310,'n1':8,'n2':15,'n3':8,'pathid':'engpath','heading':'ENGINEERING','backimg':'/techinvent.github.io/back.png'},
                        'liberal-arts':{'x':230,'y':310,'n1':10,'n2':15,'n3':25,'pathid':'lapath','heading':'LIBERAL ARTS','backimg':'/techinvent.github.io/liberal.png'},
                        'allied-health':{'x':220,'y':310,'n1':7,'n2':18,'n3':8,'pathid':'ahpath','heading':'ALLIED HEALTH','backimg':'/techinvent.github.io/health.png'},
                        'basic-science':{'x':220,'y':310,'n1':5,'n2':17,'n3':8,'pathid':'bspath','heading':'BASIC SCIENCE','backimg':'/techinvent.github.io/golden.png'},
                        'management':{'x':230,'y':310,'n1':7,'n2':9,'n3':13,'pathid':'manpath','heading':'MANAGEMENT','backimg':'/techinvent.github.io/voilet.png'}
                    };
var currentcl = 'engineering';

var currentdisplay = '';

function currentcluster(cluster){
    // window.location.hash = cluster;
    var currentclusterdet = clusterdetails[currentcl];
    var cpith = currentclusterdet['pathid'];
    document.getElementById(cpith).style.stroke="url(#paint0_linear_833_391)";
    document.getElementById(cpith).style.fill="none";
    var cldetails = clusterdetails[cluster];
    var x = cldetails['x'];
    var y = cldetails['y'];
    var n1 = cldetails['n1'];
    var n2 = cldetails['n2'];
    var n3 = cldetails['n3'];
    var heading = cldetails['heading'];
    var pathid = cldetails['pathid'];
    var backimg = cldetails['backimg'];
    document.getElementById('main-body').style.backgroundImage = 'url('+backimg+')';
    document.getElementById(pathid).style.stroke='url(#paint0_linear_833_392)';
    document.getElementById(pathid).style.fill='url(#paint0_linear_833_391)';
    document.getElementById('clusterheading').innerHTML = heading;
    document.getElementById('clusterheading').setAttribute('x',x);
    document.getElementById('tcomp').innerHTML = n1;
    document.getElementById('twork').innerHTML = n2;
    document.getElementById('tlec').innerHTML = n3;
    // console.log(pathid);
    // console.log('changed');
    // console.log(document.getElementById(pathid));
    currentcl = cluster;
}


function entermultiverse(){
  var start_section = document.getElementById('start-section');
  var cluster_map = document.getElementById('cluster-map');
  var closeclusterbtn = document.getElementById('closeclusterbtn');
  start_section.style.display = 'none';
  if(screen.width<600){
    cluster_map.style.display = 'table';}
  else{
  cluster_map.style.display = 'flex';}
  closeclusterbtn.style.display = 'block';
}


function closecluster(){
  var cluster_map = document.getElementById('cluster-map');
  var nav_bar = document.getElementById('nav-bar');
  var home_content = document.getElementById('home-content');
  var footer = document.getElementById('footer');
  var closeclusterbtn = document.getElementById('closeclusterbtn');
  document.getElementById('main-body').style.backgroundImage = 'url(back.png)';
  cluster_map.style.display = 'none';
  nav_bar.style.display = 'flex';
  if(screen.width>600){
  footer.style.display = 'flex';
  }
  home_content.style.display = 'flex';
  currentdisplay = 'home-content';
  closeclusterbtn.style.display = 'none';
}


function openaboutus(){
  var about_section = document.getElementById('about-section');
  var curentdis = document.getElementById(currentdisplay);
  curentdis.style.display = 'none';
  about_section.style.display = 'flex';
  currentdisplay = 'about-section';
  closesidebar();
}

function opensponsor(){
  var sponsor_section = document.getElementById('sponsor-section');
  var curentdis = document.getElementById(currentdisplay);
  curentdis.style.display = 'none';
  sponsor_section.style.display = 'block';
  currentdisplay = 'sponsor-section';
  closesidebar();
}



/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function opensidebar() {
  document.getElementById("mySidebar").style.width = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closesidebar() {
  document.getElementById("mySidebar").style.width = "0";
}