import React, { Component } from "react"
import axios from "axios"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import svLocale from "@fullcalendar/core/locales/sv"
import icon1 from "../images/facebook-icon.svg"
import icon2 from "../images/facebook-icon.svg"
import icon3 from "../images/facebook-icon.svg"

export default class Calendar extends Component {
  constructor(props) {
    super(props)
    this.eventClick = this.eventClick.bind(this)

    this.state = {
      modal: false,
      events1: [],
      events2: [],
      events3: [],
      specEvent: [],
      repEvent: [],
      fromToEvent: [],
      specEvent1: [],
      repEvent1: [],
      fromToEvent1: [],
      specEvent2: [],
      repEvent2: [],
      fromToEvent2: [],
      calendarWeekends: true,
      calendarEvents: [],
      clickedEvent: [],
    }
  }
  async componentDidMount() {
    axios.get(`https://login.findie.se/api/profiles/243/events`).then(res => {
      const events1 = res.data.data
      this.setState({ events1: events1 }, function () {
        const d = new Date()
        d.setMonth(d.getMonth() - 1)
        this.state.events1.map(event => {
          if (event.type == "repeating") {
            this.setState(prevState => ({
              repEvent: [
                ...prevState.repEvent,
                {
                  title: event.name,
                  startRecur: d,
                  daysOfWeek: event.params.repeating_day,
                  classNames: ["restoran1"],
                },
              ],
            }))
          }
          if (event.type == "specific_date") {
            this.setState(prevState => ({
              specEvent: [
                ...prevState.specEvent,
                {
                  title: event.name,
                  start: event.params.date_start,
                  end: event.params.date_end,
                  classNames: ["restoran1"],
                },
              ],
            }))
          }
          if (event.type == "from_to") {
            this.setState(prevState => ({
              fromToEvent: [
                ...prevState.specEvent1,
                {
                  title: event.name,
                  start: event.params.date_start,
                  end: event.params.date_end,
                  classNames: ["restoran3"],
                },
              ],
            }))
          }
        })
      })
      this.setState({
        calendarEvents: this.state.calendarEvents.concat(
          this.state.repEvent,
          this.state.specEvent,
          this.state.fromToEvent
        ),
      })
    })
  }
  toggle = () => {
    this.setState({ modal: !this.state.modal })
  }

  eventClick(info) {
    info.jsEvent.preventDefault()
    this.state.calendarEvents.map(em => {
      console.log(em)
      if (info.event.title == em.title) {
        this.setState({ modal: !this.state.modal })
        this.setState({ clickedEvent: info.event.title })
      }
    })
  }

  render() {
    const events11 = this.state.events1
    return (
        <section className="section events" id="eventzs">
<div className="container">
  <h2>Event</h2>
  <p>Här kan du se event och aktiviteter hos oss.</p>
    <div className="columns">
        <div className="column is-12">
      <div id="calendar_container">
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          locale={svLocale}
          ref={this.calendarComponentRef}
          events={this.state.calendarEvents}
          eventClick={this.eventClick}
          height="auto"
        />
        <div
          id="modalEvent"
          className={`modal ${this.state.modal ? "is-active" : ""}`}
          toggle={this.toggle}
        >
          <div className="modal-background"></div>
          <div className="modal-content">
            {events11 && events11.length > 0
              ? events11.map(el => {
                  if (el.name == this.state.clickedEvent) {
                    return (
                      <>
                        <div className="__inner">
                          {el.image.full === null || el.image.full ===""
                          ?<></>
                        :<figure className="image is-3by2">
                        <img src={el.image.full} alt={el.name} />
                      </figure>
                        }
                          
                          <div className="_innerBox">
                            <div className="_title">

                              <span>{el.name}</span>
                            </div>
                            <div className="_when">
                              {el.params.date_text} | {el.params.time_start} -{" "}
                              {el.params.time_end}
                            </div>
                            <div
                              className="_description"
                              dangerouslySetInnerHTML={{
                                __html: el.description,
                              }}
                            ></div>
                          </div>
                        </div>
                      </>
                    )
                  }
                })
              : ""}

          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={this.toggle}
          ></button>
        </div>
      </div>
      </div>
    </div>
</div>
        </section>
    )
  }
}