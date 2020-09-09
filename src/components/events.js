import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
function SelectSection() {

    const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
    return (
        <section id="events__section" className="topEventsSection">
            <div className="container">
                <div className="columns is-multiline">
                    <div className="column is-12">
                        <h2>Event</h2>
                        <h3>Här ser du event och aktiviteter hos oss.</h3>
                    </div>
                    <div className="column is-12">
                        <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">Månad</InputLabel>
                            <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={age}
                            onChange={handleChange}
                            >
                            <MenuItem value={20}>Juni 2020</MenuItem>
                            <MenuItem value={30}>Juli 2020</MenuItem>
                            <MenuItem value={10}>Augusti 2020</MenuItem>
                            <MenuItem value={10}>September 2020</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
        </section>
        

    );
  }

export default class EventsSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading:true,
            events:[],
            date: new Date(),
        }
      }
    componentDidMount() {
        axios.get('https://login.findie.se/api/profiles/247/events/').then(res => {
            const events = res.data.data;
            this.setState({loading:false, events:events},function() {
                //console.log(this.state.events)
            })
          }); 
    }
    render() {
      return (
          <div>
<SelectSection></SelectSection>
<section id="events__section" className="section">
<div className="container">
    <div className="columns">
        {this.state.events.map(event=>(
            <div className="column is-3">
        <div className="card">
          {event.image.full === null
          ?<></>
          :<div className="card-image">
          <figure className="image is-2by1">
          </figure>
      </div>
          }
                        <div className="card-content">
                            <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{event.name}</p>
                                
                                    {event.type === "repeating"
                                    ? <p className="subtitle is-6">{event.params.date_text} {event.params.time_start} - {event.params.time_end} </p>
                                       : <>
                                       {event.type === "specific_date"
                                        ? <p className="subtitle is-6">{event.params.date_text}</p>
                                        :   <p className="subtitle is-6">{event.params.date_start} - {event.params.date_end}</p>
                                        }
                                        </>
                                    }
                                
                            </div>
                            </div>
                            <div className="content">
                                {event.description}
                            </div>
                        </div>
                    </div>
                    </div>
        ))}
        
    </div>
</div>
</section>

        
          </div>
        
                    
      )
    }
  }
  