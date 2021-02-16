// Event Calendar For Methodist Church Nigeria 


// Basic config
var calendar = new Calendar(`calendarContainer`, `small`,
    [`Monday`, 3],
    [`#2A166F `, `#2A166F`, `#ffffff`, `#4EB37B`], //Primary Colors Selectors
    {
        days: [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`],
        months: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
        indicator: true,
        placeholder: `No Event for Today`,//Placeholder To SHow If no event for that day,


    }); //Days Of the week

// THis Specifies When the Services Starts and Ends
const startTime = `08:00am`,
    endTime = `12:00pm`;
// THis Specifies When the Services Starts and Ends

var data = {

    // Year 2021
    2021: {

        02: { //Represent Month Of February  02  

            1: [ //First Day Of The Month
                {
                    startTime: `1st`,
                    endTime: ` 3rd Feb`,
                    text: `Prayer And Fasting in all Local Churches `
                }
            ],

            2: [ //Second Day Of The Month
                {
                    startTime: `1st`,
                    endTime: ` 3rd Feb`,
                    text: `Prayer And Fasting in all Local Churches `
                }
            ],

            3: [ //Third Day Of The Month
                {
                    startTime: `1st`,
                    endTime: `3rd Feb`,
                    text: `Prayer And Fasting in all Local Churches `
                }
            ],

            17: [ //17th Day Of The Month
                {
                    startTime: `1st`,
                    endTime: `3rd Feb`,
                    text: `Ash Wednesday`
                }
            ],


        },

        03: { //Represent Month Of March  02  

            1: [ //First Day Of The Month
                {
                    startTime: `1st`,
                    endTime: ` 3rd Mar`,
                    text: `Prayer And Fasting in all Local Churches `
                }
            ],

            2: [ //Second Day Of The Month
                {
                    startTime: `1st`,
                    endTime: ` 3rd Mar`,
                    text: `Prayer And Fasting in all Local Churches `
                }
            ],

            3: [ //Third Day Of The Month
                {
                    startTime: `1st`,
                    endTime: `3rd Mar`,
                    text: `Prayer And Fasting in all Local Churches `
                }
            ],

            14: [ //14th Day Of The Month
                {
                    startTime: `1st`,
                    endTime: `3rd Feb`,
                    text: `Mothering Sunday`
                }
            ],

            28: [ //17th Day Of The Month
                {
                    startTime: `1st`,
                    endTime: `3rd Feb`,
                    text: `Holy Week`
                }
            ],

            29: [ //17th Day Of The Month
                {
                    startTime: `1st`,
                    endTime: `3rd Feb`,
                    text: `Holy Week`
                }
            ],

            30: [ //17th Day Of The Month
                {
                    startTime: `1st`,
                    endTime: `3rd Feb`,
                    text: `Holy Week`
                }
            ],

            31: [ //17th Day Of The Month
                {
                    startTime: `1st`,
                    endTime: `3rd Feb`,
                    text: `Mothering Sunday`
                }
            ],

        },

        04: { //Represent Month Of April  02  

            1: [ //First Day Of The Month
                {
                    startTime: `--`,
                    endTime: ` 12:00pm`,
                    text: `Prayer And Fasting in all Local Churches `
                }
            ],

            2: [ //Second Day Of The Month
                {
                    startTime: `--`,
                    endTime: ` 12:00pm`,
                    text: `Prayer And Fasting in all Local Churches `
                }
            ],

            3: [ //Third Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Prayer And Fasting in all Local Churches `
                },
                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Musical Concert at Zonal Level `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `South East Musical Concert/Drama performance `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `South West Musical Concert/Drama performance `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Youth Evangelism and Outreach in all Diocese`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Property Data Collection & Valuation, Archdiocese of Lagos`
                },

            ],

            04: [ //04th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Easter Sunday`
                },
            ],

            05: [ //05th Day Of The Month


                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Selection Conference for both full time & Tent Makers`
                }
            ],

            06: [ //06th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Selection Conference for both full time & Tent Makers`
                },
            ],

            07: [ //07th Day Of The Month
                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Selection Conference for both full time & Tent Makers`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Filling the jar Assembly/Ministers wives Seminar for Northern Zone "B" at Archdiocese of Kaduna`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Mission to Gbagyi palace (Christ the King Church) Nyaya Abuja`
                },
            ],



            08: [ //08th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Selection Conference for both full time & Tent Makers`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Mission to Gbagyi palace (Christ the King Church) Nyaya Abuja`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Filling the jar Assembly/Ministers wives Seminar for Northern Zone "B" at Archdiocese of Kaduna`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Works Department Leadership Summit Western Zone : Diocese of Remo Center`
                },

            ],



            09: [ //09th Day Of The Month
                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Selection Conference for both full time & Tent Makers`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Mission to Gbagyi palace (Christ the King Church) Nyaya Abuja`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Filling the jar Assembly/Ministers wives Seminar for Northern Zone "B" at Archdiocese of Kaduna`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Works Department Leadership Summit Western Zone : Diocese of Remo Center`
                },
            ],


            10: [ //10th Day Of The Month
                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Filling the jar Assembly/Ministers wives Seminar for Northern Zone "B" at Archdiocese of Kaduna`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Mission to Gbagyi palace (Christ the King Church) Nyaya Abuja`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Works Department Leadership Summit Western Zone : Diocese of Remo Center`
                },
            ],

            11: [ //17th Day Of The Month
                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Works Department Leadership Summit Western Zone : Diocese of Remo Center`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Mission to Gbagyi palace (Christ the King Church) Nyaya Abuja`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Inauguration of AMB in the Diocese of Uzuakoli - Cathedral Uzuakoli  `
                },
            ],

            12: [ //12th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Works Department Leadership Summit Western Zone : Diocese of Remo Center`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Mission to Gbagyi palace (Christ the King Church) Nyaya Abuja`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Young Men's Work Week`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `National Teachers Conference for All methodist Schools (Western Zone) at Diocese of Remo`
                },

            ],

            13: [ //13th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Mission to Gbagyi palace (Christ the King Church) Nyaya Abuja`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `2021 Lay Preachers Coordinator CONFAB at Wesley University, Ondo `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Young Men's Work Week`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `National Teachers Conference for All methodist Schools (Western Zone) at Diocese of Remo`
                },

            ],

            14: [ //14th Day Of The Month
                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Mission to Gbagyi palace (Christ the King Church) Nyaya Abuja`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `2021 Lay Preachers Coordinator CONFAB at Wesley University, Ondo `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Young Men's Work Week`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `National Teachers Conference for All methodist Schools (Western Zone) at Diocese of Remo`
                },

            ],


            15: [ //15th Day Of The Month
                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Mission to Gbagyi palace (Christ the King Church) Nyaya Abuja`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `2021 Lay Preachers Coordinator CONFAB at Wesley University, Ondo `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Young Men's Work Week`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `National Teachers Conference for All methodist Schools (Western Zone) at Diocese of Remo`
                },


                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Works Department Leadership Summit Western Zone : Diocese of Kubwa`
                },
            ],

            16: [ //16th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Mission to Gbagyi palace (Christ the King Church) Nyaya Abuja`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `2021 Lay Preachers Coordinator CONFAB at Wesley University, Ondo `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Young Men's Work Week`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Works Department Leadership Summit Western Zone : Diocese of Kubwa`
                },

            ],


            17: [ //17th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Mission to Gbagyi palace (Christ the King Church) Nyaya Abuja`
                },


                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Young Men's Work Week`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Works Department Leadership Summit Western Zone : Diocese of Kubwa`
                },

            ],

            18: [ //18th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Mission to Gbagyi palace (Christ the King Church) Nyaya Abuja`
                },


                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Young Men's Work Week`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Inspection of Schools in the Archdiocese of Umuahia`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Works Department Leadership Summit Western Zone : Diocese of Kubwa`
                },

            ],

            19: [ //19th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Mission to Gbagyi palace (Christ the King Church) Nyaya Abuja`
                },


                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Inspection of Schools in the Archdiocese of Umuahia`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Works Department Leadership Summit Western Zone : Diocese of Kubwa`
                },

            ],

            20: [ //19th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Mission to Gbagyi palace (Christ the King Church) Nyaya Abuja`
                },


                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Inspection of Schools in the Archdiocese of Umuahia`
                },
            ],

            21: [ //19th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Mission to Gbagyi palace (Christ the King Church) Nyaya Abuja`
                },


                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Inspection of Schools in the Archdiocese of Umuahia`
                },
            ],

            22: [ //19th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Mission to Gbagyi palace (Christ the King Church) Nyaya Abuja`
                },


                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Inspection of Schools in the Archdiocese of Umuahia`
                },
            ],

        },

    }
};

var organizer = new Organizer(`organizerContainer`, calendar, data);