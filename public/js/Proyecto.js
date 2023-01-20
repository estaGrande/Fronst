class Proyecto extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mostrar: false
        };

        this.cambiaso= this.cambiaso.bind(this);
    }

    cambiaso(){
        var elAhora= this.state.mostrar;
        this.setState({            
            mostrar: !elAhora                                
        });              
    }

    render(){
        var clase="";
        var texto="";
        if(this.state.mostrar){
            clase=" d-block"
            texto="Menos info"
        }else{
            clase=" d-none"
            texto="Más info"
        }
        return(
            <React.Fragment>
                <img class="col-4" src={"img/"+this.props.imagen} alt="" />
                <h4>{this.props.nombre}</h4>
                <button class="btn btn-warning w-50 " onClick={this.cambiaso}>{texto}</button>
                <p class={clase}>{this.props.info}</p>
            </React.Fragment>
        );
    }
}

//Marco_Rossi
ReactDOM.render(<Proyecto
imagen="Marco_Rossi.webp" nombre="Marco Rossi" info="Es el personaje principal y protagonista de la serie, quien ha sido jugable en los juegos principales de Metal Slug (¨Metal Slug 1¨ al ¨Metal Slug 7¨) haciendo cameos en distintos juegos secundarios de la saga como ejemplo ¨Metal Slug Advance¨. Ítalo-Americano nacido en Idaho, Marchrius Dennis Rossi es un Mayor en Metal Slug 6, Lugarteniente en Metal Slug del Escuadrón PF y Comandante de la Compañía 1 de la Escuadra. Marco es un hombre amable, pero capaz de caer en arrebatos incontrolables; que el villano de la serie, el General Morden (quien es el responsable de la muerte de decenas de amigos y colegas de Marco en la Brigada PF), tratará de aprovechar."/>,
document.getElementById("marco"));

//Tarma_Roving
ReactDOM.render(<Proyecto
imagen="Tarma_Roving.webp" nombre="Tarma Roving" info="Su nombre completo es Tarmicle Roving Spencer III. Hijo de un distinguido soldado, nació en Hokkaidō, Japón. Tarma se unió al entrenamiento del ejército de tácticas especiales y combate cuerpo a cuerpo. Cuando tenía 20 años, rescató al presidente de EE.UU. siendo luego trasladado a la Brigada de Halcones Peregrinos. Luchó junto a su mejor amigo Marco Rossi en la Gran Guerra, siendo promovido como capitán. Después de la primera guerra contra Morden quiso renunciar, pero sus superiores no se lo permiten." />,
document.getElementById("tarma"));

//Eri_Kasamoto
ReactDOM.render(<Proyecto
imagen="Eri_Kasamoto.webp" nombre="Eri Kasamot" info="Eri es una chica huérfana, abandonada ante la puerta de una iglesia por sus padres. Una vez alcanzó la madurez, huyó de la iglesia y se convirtió en una líder de niños de la calle. La Agencia de Inteligencia de las Fuerzas del Gobierno se fijó en sus habilidades de combate y la contrató. Ella llegó a recibir una formación especial de espionaje para aquellos con talento especial y completado con éxito una serie de misiones como agente de primera. Pero Eri, cansada de la serie de misiones que incluían asesinatos, que trazaron una línea dura en su conciencia, solicitó ser trasladada a la Brigada Especial de Operaciones ¨Gorriones¨ (S.P.A.R.R.O.W.S), pero su petición fue denegada, especialmente por sus logros y habilidades superiores que demostraba en las misiones. Por sus esfuerzos en el fallido segundo golpe de Estado de Morden, recibió un ascenso a Sargento de Segunda Clase."/>,
document.getElementById("eri"));

//Fio_Germi
ReactDOM.render(<Proyecto
imagen="Fio_Germi.webp" nombre="Fio Germi" info="Es la única hija de una rica familia italiana. Después de que ella naciera, su madre no pudo tener más hijos, lo que hace de Fio la primera heredera en la historia de su familia, ya que no tenía hermanos mayores. A lo largo de las generaciones, la familia Germi ha hecho una tradición de enviar a su hijo mayor en el ejército; Fio mantiene esta tradición de buen grado, aunque con aspiraciones de llegar a ser médico algún día. Fio es una Sargento Mayor de los Gorriones, Agencia de Inteligencia, que sirve como un grupo de fuerzas especiales para el gobierno. Al igual que con sus compañeros en Metal Slug 2 y posteriores títulos, ella es ascendida por sus servicios en la lucha contra el General Morden."/>,
document.getElementById("fio"));
