import { Component } from "react";

class Clock extends Component {
    
    state = {
        date: new Date(),
        day: 'Mardi',
    };
// Proprieté day
day = 'jeudi';

// component did mount on vas prendre un cycle de vie celui-ci vas se lancer aprés le render
componentDidMount(){
    this.timerID = setInterval(() => {
        this.tick();
    },1000)
} 


// Methode 
    updateDay = () =>{
        // setState, il vient du extends component
        this.setState({
            day: 'Lundi',

        });

        this.day = 'vendredi';
    };

    // Méthode 
    tick(){
        this.setState({
            date: new Date(),
        })
    }

    render(){
        return (
            <div>
                <h1 className="m-8 text-4xl font-bold text-center">Hello, on est le {this.state.day} et on est pas le {this.day}</h1>

                <h2 className="text-center">Il est {this.state.date.toLocaleTimeString()} sur React Radio DAB+</h2>

                <button type="button" className="px-4 py-2 rounded bg-indigo-600 text-white duration-200 hover:bg-indigo-800 block mx-auto mt-4" onClick={this.updateDay}> update the Day</button>

            </div>
        )
    }
}

export default Clock;