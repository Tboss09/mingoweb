// Event Calendar For Methodist Church Nigeria 


// Basic config
var calendar = new Calendar(`calendarContainer`, `small`,
    [`Monday`, 3],
    [`#2A166F `, `#2A166F`, `#ffffff`, `#4EB37B`], //Primary Colors Selectors
    {
        days: [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`],
        months: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
        indicator: true,
        placeholder: `No event for this day`,//Placeholder To SHow If no event for that day,


    }); //Days Of the week

//Repeating Events Solver 
// Make The Computer do the work instead of Writing The Event More That Twice ☺️, Brilliant


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

        04: { //Represent Month Of April  04  

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

            ],

            04: [ //04th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Easter Sunday`
                },
            ],

            08: [ //08th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Works Department Leadership Summit Western Zone :Diocese of Remo`
                },
            ],

            09: [ //08th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Works Department Leadership Summit Western Zone :Diocese of Remo`
                },
            ],

            10: [ //08th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Works Department Leadership Summit Western Zone :Diocese of Remo`
                },
            ],

            11: [ //08th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Works Department Leadership Summit Western Zone :Diocese of Remo`
                },
            ],

            12: [ //08th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Works Department Leadership Summit Western Zone :Diocese of Remo`
                },
            ],
        },

        05: { //Rep Month Of May 05 

            1: [ //1st Day Of The Month
                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Workers Day`
                },

                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Prayer And Fasting in all Local Churches `
                }

            ],

            2: [ //2st Day Of The Month

                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Prayer And Fasting in all Local Churches `
                }

            ],

            3: [ //3st Day Of The Month
                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Prayer And Fasting in all Local Churches `
                }

            ],

            10: [ //10th Day Of The Month
                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Council of Bishops/Combined Retreat Summit in ArchDiocese of Calabar `
                }

            ],

            11: [ //11th Day Of The Month
                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Council of Bishops/Combined Retreat Summit in ArchDiocese of Calabar `
                }

            ],

            12: [ //12th Day Of The Month
                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Council of Bishops/Combined Retreat Summit in ArchDiocese of Calabar `
                }

            ],

            13: [ //13th Day Of The Month
                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Council of Bishops/Combined Retreat Summit in ArchDiocese of Calabar `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Work Coordinator' CONFAB :Trinity Council`
                },
            ],

            14: [ //14th Day Of The Month

                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Council of Bishops/Combined Retreat Summit in ArchDiocese of Calabar `
                },

                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Workshop on Child Abuse and Domestic Violence  `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Work Coordinator' CONFAB :Trinity Council`
                },

            ],

            15: [ //15st Day Of The Month
                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Council of Bishops/Combined Retreat Summit in ArchDiocese of Calabar `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Work Coordinator' CONFAB :Trinity Council`
                },

                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Workshop on Child Abuse and Domestic Violence  `
                },

            ],

            16: [ //16st Day Of The Month
                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Council of Bishops/Combined Retreat Summit in ArchDiocese of Calabar `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Work Coordinator' CONFAB :Trinity Council`
                },

            ],

            17: [ //17st Day Of The Month
                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Council of Bishops/Combined Retreat Summit in ArchDiocese of Calabar `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children and Youth Work Coordinator' CONFAB :Trinity Council`
                },

            ],

            23: [ //23st Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Pentecost Sunday`
                },

            ],

            24: [ //24th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Wesley Sunday`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Evangelism and Soul Winning Week`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Children Ministry Week in all the Local Churches `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `National Children Teachers Convention for Western Zone:Diocese of Lagos North  `
                },

            ],

            25: [ //25th Day Of The Month


                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Evangelism and Soul Winning Week`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Children Ministry Week in all the Local Churches `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `National Children Teachers Convention for Western Zone:Diocese of Lagos North  `
                },

            ],

            26: [ //25th Day Of The Month


                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Evangelism and Soul Winning Week`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Children Ministry Week in all the Local Churches `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `National Children Teachers Convention for Western Zone:Diocese of Lagos North  `
                },

            ],

            27: [ //27th Day Of The Month


                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Evangelism and Soul Winning Week`
                },


                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Children's Day`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Children Ministry Week in all the Local Churches `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `National Children Teachers Convention for Western Zone:Diocese of Lagos North  `
                },

            ],

            28: [ //28th Day Of The Month


                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Evangelism and Soul Winning Week`
                },


                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Children Ministry Week in all the Local Churches `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `National Children Teachers Convention for Western Zone:Diocese of Lagos North  `
                },

            ],

            29: [ //29th Day Of The Month


                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Evangelism and Soul Winning Week`
                },


                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Children Ministry Week in all the Local Churches `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `National Children Teachers Convention for Western Zone:Diocese of Lagos North  `
                },

            ],

            30: [ //30th Day Of The Month

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Evangelism and Soul Winning Week`
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Children Ministry Week in all the Local Churches `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `National Children Teachers Convention for Western Zone:Diocese of Lagos North  `
                },


            ],
        },

        06: { //Rep Month Of June

            1: [ //1st Day Of The Month

                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Prayer And Fasting in all Local Churches `
                }

            ],

            2: [ //1st Day Of The Month

                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Prayer And Fasting in all Local Churches `
                }

            ],

            3: [ //1st Day Of The Month

                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Prayer And Fasting in all Local Churches `
                }

            ],


            10: [ //10th Day Of The Month

                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `48th Conference Connexional Council at Sagamu `
                },

                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Youth Presidents Summit and Enlarge Exco Meeting Archdiocese of Ilesa`
                },

            ],

            11: [ //11th Day Of The Month

                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Youth Presidents Summit and Enlarge Exco Meeting Archdiocese of Ilesa`
                },


            ],

            12: [ //12th Day Of The Month

                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Youth Presidents Summit and Enlarge Exco Meeting Archdiocese of Ilesa`
                },


            ],

            13: [ //13th Day Of The Month

                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Youth Presidents Summit and Enlarge Exco Meeting Archdiocese of Ilesa`
                },


            ],

            18: [ //18th Day Of The Month
                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `2021 Conference Lay Preacher Examination`
                },


            ],

            19: [ //19th Day Of The Month

                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `2021 Conference Lay Preacher Examination`
                },


            ],

            24: [ //24th Day Of The Month

                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Special Programme for the Youth Organized by the Women Fellowship at Diocesan level`
                },


            ],

            25: [ //25th Day Of The Month

                {
                    startTime: `--`,
                    endTime: ` --`,
                    text: `Special Programme for the Youth Organized by the Women Fellowship at Diocesan level`
                },


            ],

        },

        07: { //Rep Month Of July

            1: [ //First Day Of The Month
                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Prayer And Fasting in all Local Churches `
                }
            ],

            2: [ //2nd Day Of The Month
                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Prayer And Fasting in all Local Churches `
                }
            ],

            3: [ //3rd Day Of The Month
                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Prayer And Fasting in all Local Churches `
                }
            ],


            19: [ //19th Day Of The Month
                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Youth Week `
                }
            ],

            20: [ //20th Day Of The Month
                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Youth Week `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `National Youth Election : Youth Work Center, Wesley College Compound, Elekuro ,Ibadan `
                },
            ],

            21: [ //21 Day Of The Month
                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Youth Week `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `National Youth Election : Youth Work Center, Wesley College Compound, Elekuro ,Ibadan `
                },

            ],

            22: [ //22nd Day Of The Month
                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Youth Week `
                },

                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `National Youth Election : Youth Work Center, Wesley College Compound, Elekuro ,Ibadan `
                }
            ],

            23: [ //23rd Day Of The Month
                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Youth Week `
                }
            ],

            24: [ //24th Day Of The Month
                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Youth Week `
                }
            ],

            25: [ //25th Day Of The Month
                {
                    startTime: `--`,
                    endTime: `--`,
                    text: `Conference Youth Week `
                }
            ],

        }
    }
};

var organizer = new Organizer(`organizerContainer`, calendar, data);