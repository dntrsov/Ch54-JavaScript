const Home = (props) =>{
    const name = "Carlos";

    return (
        <main>
            
            <h1>Hola {props.name}</h1>
        <h2>Tu casa es {props.howargtsHome}</h2>
        </main>
    );

};

export { Home };
