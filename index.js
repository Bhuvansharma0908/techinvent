const clusterdetails = {
    'engineering': { 'x': 260, 'y': 330, 'n1': 8, 'n2': 15, 'n3': 8, 'pathid': 'engpath', 'heading': 'ENGINEERING', 'backimg': 'back.webp' },
    'liberal-arts': { 'x': 260, 'y': 330, 'n1': 10, 'n2': 15, 'n3': 25, 'pathid': 'lapath', 'heading': 'LIBERAL ARTS', 'backimg': 'liberal.webp' },
    'allied-health': { 'x': 250, 'y': 330, 'n1': 7, 'n2': 18, 'n3': 8, 'pathid': 'ahpath', 'heading': 'ALLIED HEALTH', 'backimg': 'health.webp' },
    'basic-science': { 'x': 250, 'y': 330, 'n1': 5, 'n2': 17, 'n3': 8, 'pathid': 'bspath', 'heading': 'BASIC SCIENCE', 'backimg': 'golden.webp' },
    'management': { 'x': 260, 'y': 330, 'n1': 7, 'n2': 9, 'n3': 13, 'pathid': 'manpath', 'heading': 'MANAGEMENT', 'backimg': 'voilet.webp' }
};
window.onload = function() {
    if (localStorage.getItem("page") == "main-content") {
        redirectmain();
    }
}
var currentcl = 'engineering';
var myTimeout;
var currentdisplay = '';
var nav_bar = document.getElementById('nav-bar');
var home_content = document.getElementById('home-content');
var footer = document.getElementById('footer');
var closeclusterbtn = document.getElementById('closeclusterbtn');
var about_section = document.getElementById('about-section');
var nav = document.getElementById('nav-bar');
var start_section = document.getElementById('start-section');
var hint = 0;

function currentcluster(cluster) {
    // window.location.hash = cluster;
    var currentclusterdet = clusterdetails[currentcl];
    var cpith = currentclusterdet['pathid'];
    document.getElementById(cpith).style.stroke = "url(#paint0_linear_833_391)";
    document.getElementById(cpith).style.fill = "none";
    var cldetails = clusterdetails[cluster];
    var x = cldetails['x'];
    var y = cldetails['y'];
    var n1 = cldetails['n1'];
    var n2 = cldetails['n2'];
    var n3 = cldetails['n3'];
    var heading = cldetails['heading'];
    var pathid = cldetails['pathid'];
    var backimg = cldetails['backimg'];
    document.getElementById('main-body').style.transition = "2s";
    document.getElementById('main-body').style.backgroundImage = 'url(' + backimg + ')';

    document.getElementById(pathid).style.stroke = 'url(#paint0_linear_833_392)';
    document.getElementById(pathid).style.fill = 'url(#paint0_linear_833_391)';
    document.getElementById('clusterheading').innerHTML = heading;
    document.getElementById('clusterheading').setAttribute('x', x);
    document.getElementById('clusterheading').setAttribute('y', y);

    document.getElementById('tcomp').innerHTML = n1;
    document.getElementById('twork').innerHTML = n2;
    document.getElementById('tlec').innerHTML = n3;

    // console.log(pathid);
    // console.log('changed');
    // console.log(document.getElementById(pathid));
    currentcl = cluster;

}

var cluster_map = document.getElementById('cluster-map');
var closeclusterbtn = document.getElementById('closeclusterbtn');

function entermultiverse() {

    document.body.style.overflowY = "scroll";
    start_section.style.display = 'none';
    if (screen.width < 600) {
        cluster_map.style.display = 'table';
    } else {
        cluster_map.style.display = 'flex';
    }
    closeclusterbtn.style.display = 'block';
    currentdisplay = 'cluster-map';
    myTimeout = setTimeout(animate, 1500);




}

function animate() {
    var currentpage = document.getElementById(currentdisplay);
    console.log(currentpage);
    currentpage.style.transition = "2s";
    currentpage.style.opacity = "100%";
    document.getElementById('home-content').style.transition = "1s";
    if (currentdisplay == 'cluster-map') {
        closeclusterbtn.style.transition = "2s";
        closeclusterbtn.style.opacity = "100%";
    }
    if (currentdisplay == 'home-content') {
        nav.style.transition = "2s";
        nav.style.opacity = "100%";

    }

}

function closecluster() {


    // document.getElementById('main-body').style.backgroundImage = 'url(back.png)';
    document.getElementById(currentdisplay).style.display = "none";
    document.getElementById(currentdisplay).style.opacity = "0%";
    cluster_map.style.display = 'none';
    nav_bar.style.display = 'flex';
    if (screen.width > 600) {
        footer.style.display = 'flex';
    }
    home_content.style.display = 'flex';
    currentdisplay = 'home-content';
    closeclusterbtn.style.display = 'none';
    localStorage.setItem("page", "main-content")
    myTimeout = setTimeout(animate, 1500);
}

function redirectmain() {


    // document.getElementById('main-body').style.backgroundImage = 'url(back.png)';
    // document.getElementById(currentdisplay).style.display = "none";
    // document.getElementById(currentdisplay).style.opacity = "0%";
    start_section.style.display = 'none';
    cluster_map.style.display = 'none';
    nav_bar.style.display = 'flex';
    if (screen.width > 600) {
        footer.style.display = 'flex';
        console.log(screen.width);
    }

    home_content.style.display = 'flex';
    currentdisplay = 'home-content';
    closeclusterbtn.style.display = 'none';
    myTimeout = setTimeout(animate, 1500);
}

function openaboutus() {

    var curentdis = document.getElementById(currentdisplay);
    document.getElementById(currentdisplay).style.opacity = "0%";
    curentdis.style.display = 'none';
    about_section.style.display = 'flex';
    currentdisplay = 'about-section';
    closesidebar();
    myTimeout = setTimeout(animate, 1500);
}

function opensponsor() {
    var sponsor_section = document.getElementById('sponsor-section');
    document.getElementById(currentdisplay).style.opacity = "0%";
    var curentdis = document.getElementById(currentdisplay);
    curentdis.style.display = 'none';
    sponsor_section.style.display = 'block';
    currentdisplay = 'sponsor-section';
    closesidebar();
    myTimeout = setTimeout(animate, 1500);
}



/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function opensidebar() {
    document.getElementById("mySidebar").style.width = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closesidebar() {
    document.getElementById("mySidebar").style.width = "0";
}

function closeabout() {

    closecluster();
}

function competitonpage() {
    window.open("competitions.html", "_blank");
}

function lecturepage() {
    window.open("lecture.html", "_blank");
}

function workshoppage() {
    window.open("workshop.html", "_blank");
}

function exibitionpage() {
    window.open("exibition.html", "_blank");
}