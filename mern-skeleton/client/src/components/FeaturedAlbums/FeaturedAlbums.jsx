import React from 'react'
import "./FeaturedAlbums.css"
import ResultCard from "../ResultCard/ResultCard"

function FeaturedAlbums() {

  const featured = [
    {
    "id": 191288,
    "status": "Accepted",
    "year": 1997,
    "resource_url": "https://api.discogs.com/releases/191288",
    "uri": "https://www.discogs.com/release/191288-Future-Force-Puttin-A-Rush-On-Me-Mark-Picchiotti-AG-Division-Hippie-Torrales-Mark-Mendoza-Mixes",
    "artists": [
        {
            "name": "Future Force",
            "anv": "",
            "join": "",
            "role": "",
            "tracks": "",
            "id": 32463,
            "resource_url": "https://api.discogs.com/artists/32463"
        }
    ],
    "artists_sort": "Future Force",
    "labels": [
        {
            "name": "AM:PM",
            "catno": "582 093-1",
            "entity_type": "1",
            "entity_type_name": "Label",
            "id": 689,
            "resource_url": "https://api.discogs.com/labels/689"
        }
    ],
    "series": [],
    "companies": [],
    "formats": [
        {
            "name": "Vinyl",
            "qty": "2",
            "descriptions": [
                "12\"",
                "33 ⅓ RPM",
                "Limited Edition"
            ]
        }
    ],
    "data_quality": "Needs Vote",
    "community": {
        "have": 272,
        "want": 33,
        "rating": {
            "count": 24,
            "average": 3.92
        },
        "submitter": {
            "username": "Sly",
            "resource_url": "https://api.discogs.com/users/Sly"
        },
        "contributors": [
            {
                "username": "Sly",
                "resource_url": "https://api.discogs.com/users/Sly"
            },
            {
                "username": "SoulDancer",
                "resource_url": "https://api.discogs.com/users/SoulDancer"
            },
            {
                "username": "theauxphou",
                "resource_url": "https://api.discogs.com/users/theauxphou"
            },
            {
                "username": "zevulon",
                "resource_url": "https://api.discogs.com/users/zevulon"
            },
            {
                "username": "phunkydrummer",
                "resource_url": "https://api.discogs.com/users/phunkydrummer"
            },
            {
                "username": "Vinyl_For_Sale_By_Radius",
                "resource_url": "https://api.discogs.com/users/Vinyl_For_Sale_By_Radius"
            },
            {
                "username": "gemini80s",
                "resource_url": "https://api.discogs.com/users/gemini80s"
            },
            {
                "username": "wonder2207",
                "resource_url": "https://api.discogs.com/users/wonder2207"
            },
            {
                "username": "mr_mando",
                "resource_url": "https://api.discogs.com/users/mr_mando"
            }
        ],
        "data_quality": "Needs Vote",
        "status": "Accepted"
    },
    "format_quantity": 2,
    "date_added": "2003-10-04T09:25:12-07:00",
    "date_changed": "2021-11-30T05:36:50-08:00",
    "num_for_sale": 100,
    "lowest_price": 0.38,
    "master_id": 77134,
    "master_url": "https://api.discogs.com/masters/77134",
    "title": "Puttin' A Rush On Me (Mark Picchiotti / A&G Division / Hippie Torrales & Mark Mendoza Mixes)",
    "country": "UK",
    "released": "1997",
    "notes": "Produced for MARK! Productions / Diesel Productions. Recorded, engineered & mixed at Hutch Studios, Chicago, USA.\r\nA1 Horns by Paul Mertens, Orbert Davis (courtesy of Copia Records) & Mike Harpin.\r\nLimited Edition DJ double pack.\r\n",
    "released_formatted": "1997",
    "identifiers": [
        {
            "type": "Barcode",
            "value": "7 31458 20931 7",
            "description": "Text"
        },
        {
            "type": "Rights Society",
            "value": "BIEM / MCPS"
        },
        {
            "type": "Label Code",
            "value": "LC 0485"
        },
        {
            "type": "Matrix / Runout",
            "value": "582 093-1 A-1",
            "description": "Runout Side A"
        },
        {
            "type": "Matrix / Runout",
            "value": "582 093-1- B-1",
            "description": "Runout Side B"
        },
        {
            "type": "Matrix / Runout",
            "value": "582 093-1 C-1",
            "description": "Runout Side C"
        },
        {
            "type": "Matrix / Runout",
            "value": "582 093-1- D-1",
            "description": "Runout Side D"
        }
    ],
    "videos": [
        {
            "uri": "https://www.youtube.com/watch?v=ZU3v9dSTQe8",
            "title": "Future Force - Puttin' a Rush (Mark's Epic Vocal)",
            "description": "",
            "duration": 587,
            "embed": true
        },
        {
            "uri": "https://www.youtube.com/watch?v=kXjGahFruew",
            "title": "Future Force - Puttin A Rush On Me (Emotive Remix)",
            "description": "Thank you for listening.",
            "duration": 219,
            "embed": true
        },
        {
            "uri": "https://www.youtube.com/watch?v=CYxCVYj8ROo",
            "title": "Future Force - Puttin' A Rush On Me (Bonus Grooves)",
            "description": "Remixed by Hippie Torrales & Mark Mendoza. 1997",
            "duration": 304,
            "embed": true
        },
        {
            "uri": "https://www.youtube.com/watch?v=BAlD8mkMU4I",
            "title": "(1997) Future Force - Puttin' A Rush On Me [Mark Picchiotti Epic Vocal Mix]",
            "description": "http://www.discogs.com/Future-Force-Puttin-A-Rush-On-Me/release/176017\n\n(Promotional Use Only. All Rights belong to their respective owners.\nSupport Artists, if You like, buy the Music. 'Please' if You want to remove a song just leave me a message and I w",
            "duration": 584,
            "embed": true
        },
        {
            "uri": "https://www.youtube.com/watch?v=d69a_U1Ippw",
            "title": "Future Force ‎– Puttin' A Rush On Me (Mentor Vocal)",
            "description": "Year : 1997\nLabel : https://www.discogs.com/label/689-AMPM\nDiscogs : https://www.discogs.com/Future-Force-Puttin-A-Rush-On-Me/release/4106844\nEtichetta:\nAM:PM ‎– AMPMDJ71\nFormato:\nVinyl, 12, Promo, Test Pressing \nPaese:\nUK\nUscita:\n1997\nGenere:\nElectr",
            "duration": 381,
            "embed": true
        },
        {
            "uri": "https://www.youtube.com/watch?v=JKXKKxPq7F8",
            "title": "Future Force. Puttin' A Rush On Me",
            "description": "Mentor Club Mix\r\nAMPM Records\r\nVocals : Terri Symon\r\n1996",
            "duration": 509,
            "embed": true
        },
        {
            "uri": "https://www.youtube.com/watch?v=IVukv7Gdhx0",
            "title": "Future Force - Puttin' a Rush on Me (Great Divide Dub)",
            "description": " ",
            "duration": 399,
            "embed": true
        },
        {
            "uri": "https://www.youtube.com/watch?v=xT2aOrWvInI",
            "title": "Future Force - What You Want (Fade DMC Mix) Audio Only.mov",
            "description": "For entertainment purposes only.",
            "duration": 691,
            "embed": true
        },
        {
            "uri": "https://www.youtube.com/watch?v=CvOn-pSO3e8",
            "title": "Future Force - Puttin' A Rush On Me (Freefall Remix)",
            "description": "https://www.discogs.com/Various-Remix-Culture-168/release/427385",
            "duration": 528,
            "embed": true
        },
        {
            "uri": "https://www.youtube.com/watch?v=VzBHJ1XCEws",
            "title": "Future Force - Puttin' A Rush On Me (Mentor Dub)",
            "description": "mark picchiotti business, 1997, am:pm records\nFuture Force - Puttin' A Rush On Me (Mentor Dub)",
            "duration": 371,
            "embed": true
        },
        {
            "uri": "https://www.youtube.com/watch?v=46aom7rz-jM",
            "title": "Future Force - Puttin' A Rush On Me (DMC Remix by Freefall)",
            "description": "This is the Freefall remix of Puttin’ A Rush On Me from (DMC) Remix Culture 168\n© 1996 AM:PM\nCopyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for fair use for purposes such as criticism, comment, news reporting, te",
            "duration": 536,
            "embed": true
        }
    ],
    "genres": [
        "Electronic"
    ],
    "styles": [
        "Garage House"
    ],
    "tracklist": [
        {
            "position": "A1",
            "type_": "track",
            "title": "Puttin' A Rush On Me (Mark!'s Epic Vocal)",
            "extraartists": [
                {
                    "name": "Mike Harpin",
                    "anv": "",
                    "join": "",
                    "role": "Horns",
                    "tracks": "",
                    "id": 623430,
                    "resource_url": "https://api.discogs.com/artists/623430"
                },
                {
                    "name": "Orbert C. Davis",
                    "anv": "",
                    "join": "",
                    "role": "Horns",
                    "tracks": "",
                    "id": 412222,
                    "resource_url": "https://api.discogs.com/artists/412222"
                },
                {
                    "name": "Paul Mertens",
                    "anv": "",
                    "join": "",
                    "role": "Horns",
                    "tracks": "",
                    "id": 276408,
                    "resource_url": "https://api.discogs.com/artists/276408"
                },
                {
                    "name": "Craig J. Snider",
                    "anv": "",
                    "join": "",
                    "role": "Keyboards",
                    "tracks": "",
                    "id": 105936,
                    "resource_url": "https://api.discogs.com/artists/105936"
                },
                {
                    "name": "Mark Picchiotti",
                    "anv": "MARK!",
                    "join": "",
                    "role": "Remix",
                    "tracks": "",
                    "id": 16880,
                    "resource_url": "https://api.discogs.com/artists/16880"
                }
            ],
            "duration": ""
        },
        {
            "position": "A2",
            "type_": "track",
            "title": "Puttin' A Rush On Me (Accapella)",
            "duration": ""
        },
        {
            "position": "B1",
            "type_": "track",
            "title": "Puttin' A Rush On Me (Mentor Club Mix)",
            "extraartists": [
                {
                    "name": "Mentor",
                    "anv": "",
                    "join": "",
                    "role": "Remix",
                    "tracks": "",
                    "id": 64714,
                    "resource_url": "https://api.discogs.com/artists/64714"
                }
            ],
            "duration": ""
        },
        {
            "position": "B2",
            "type_": "track",
            "title": "Puttin' A Rush On Me (Mentor Dub)",
            "extraartists": [
                {
                    "name": "Mentor",
                    "anv": "",
                    "join": "",
                    "role": "Remix",
                    "tracks": "",
                    "id": 64714,
                    "resource_url": "https://api.discogs.com/artists/64714"
                }
            ],
            "duration": ""
        },
        {
            "position": "C1",
            "type_": "track",
            "title": "Puttin' A Rush On Me (A&G Full Vocal)",
            "extraartists": [
                {
                    "name": "A & G Division",
                    "anv": "A&G",
                    "join": "",
                    "role": "Remix",
                    "tracks": "",
                    "id": 54075,
                    "resource_url": "https://api.discogs.com/artists/54075"
                }
            ],
            "duration": ""
        },
        {
            "position": "C2",
            "type_": "track",
            "title": "Puttin' A Rush On Me (Great Divide Dub)",
            "extraartists": [
                {
                    "name": "A & G Division",
                    "anv": "",
                    "join": "",
                    "role": "Remix",
                    "tracks": "",
                    "id": 54075,
                    "resource_url": "https://api.discogs.com/artists/54075"
                }
            ],
            "duration": ""
        },
        {
            "position": "D1",
            "type_": "track",
            "title": "Puttin' A Rush On Me (Mark!'s Shelter Dub)",
            "extraartists": [
                {
                    "name": "Mark Picchiotti",
                    "anv": "MARK!",
                    "join": "",
                    "role": "Remix",
                    "tracks": "",
                    "id": 16880,
                    "resource_url": "https://api.discogs.com/artists/16880"
                }
            ],
            "duration": ""
        },
        {
            "position": "D2",
            "type_": "track",
            "title": "Puttin' A Rush On Me (Mark!'s Puttin' A Rub On Dub)",
            "extraartists": [
                {
                    "name": "Richie Davis (3)",
                    "anv": "",
                    "join": "",
                    "role": "Guitar",
                    "tracks": "",
                    "id": 4388043,
                    "resource_url": "https://api.discogs.com/artists/4388043"
                },
                {
                    "name": "Mark Picchiotti",
                    "anv": "MARK!",
                    "join": "",
                    "role": "Remix",
                    "tracks": "",
                    "id": 16880,
                    "resource_url": "https://api.discogs.com/artists/16880"
                }
            ],
            "duration": ""
        }
    ],
    "extraartists": [
        {
            "name": "Mark Picchiotti",
            "anv": "",
            "join": "",
            "role": "Arranged By",
            "tracks": "",
            "id": 16880,
            "resource_url": "https://api.discogs.com/artists/16880"
        },
        {
            "name": "Paul Mertens",
            "anv": "",
            "join": "",
            "role": "Arranged By",
            "tracks": "",
            "id": 276408,
            "resource_url": "https://api.discogs.com/artists/276408"
        },
        {
            "name": "Robin Robinson",
            "anv": "",
            "join": "",
            "role": "Backing Vocals",
            "tracks": "",
            "id": 320387,
            "resource_url": "https://api.discogs.com/artists/320387"
        },
        {
            "name": "Terri Symon",
            "anv": "",
            "join": "",
            "role": "Backing Vocals",
            "tracks": "",
            "id": 101559,
            "resource_url": "https://api.discogs.com/artists/101559"
        },
        {
            "name": "Yvonne Gage",
            "anv": "",
            "join": "",
            "role": "Backing Vocals",
            "tracks": "",
            "id": 63984,
            "resource_url": "https://api.discogs.com/artists/63984"
        },
        {
            "name": "Mark Picchiotti",
            "anv": "",
            "join": "",
            "role": "Producer, Recorded By, Engineer, Mixed By",
            "tracks": "",
            "id": 16880,
            "resource_url": "https://api.discogs.com/artists/16880"
        },
        {
            "name": "Terri Symon",
            "anv": "",
            "join": "",
            "role": "Vocals",
            "tracks": "",
            "id": 101559,
            "resource_url": "https://api.discogs.com/artists/101559"
        },
        {
            "name": "Paul Laurence",
            "anv": "",
            "join": "",
            "role": "Written-By",
            "tracks": "",
            "id": 158264,
            "resource_url": "https://api.discogs.com/artists/158264"
        },
        {
            "name": "Timmy Allen",
            "anv": "Tim Allen",
            "join": "",
            "role": "Written-By",
            "tracks": "",
            "id": 114602,
            "resource_url": "https://api.discogs.com/artists/114602"
        }
    ],
    "images": [
        {
            "type": "primary",
            "uri": "https://i.discogs.com/w3nixRzndirdukhu5DTz0xcKC05Osr1kJNhUTJ6gti0/rs:fit/g:sm/q:90/h:304/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMTI3NjkwNzIy/LmpwZWc.jpeg",
            "resource_url": "https://i.discogs.com/w3nixRzndirdukhu5DTz0xcKC05Osr1kJNhUTJ6gti0/rs:fit/g:sm/q:90/h:304/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMTI3NjkwNzIy/LmpwZWc.jpeg",
            "uri150": "https://i.discogs.com/W_9DykM1dax9LIVaOdIBRCK1v34DDN8ZY656KmoHj3M/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMTI3NjkwNzIy/LmpwZWc.jpeg",
            "width": 300,
            "height": 304
        },
        {
            "type": "secondary",
            "uri": "https://i.discogs.com/d9LO4xH0M9LeLpy3HweNb-NteUToUx65XPmuTeB7HA0/rs:fit/g:sm/q:90/h:296/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMDg0MDYwNjE3/LmpwZw.jpeg",
            "resource_url": "https://i.discogs.com/d9LO4xH0M9LeLpy3HweNb-NteUToUx65XPmuTeB7HA0/rs:fit/g:sm/q:90/h:296/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMDg0MDYwNjE3/LmpwZw.jpeg",
            "uri150": "https://i.discogs.com/CMI3wlv4kjtXHyesvlLCBj_5CJYKYSETQ64m7sJ6yQU/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMDg0MDYwNjE3/LmpwZw.jpeg",
            "width": 300,
            "height": 296
        },
        {
            "type": "secondary",
            "uri": "https://i.discogs.com/CRG-O4V_AG2w4fHwxpBCDBHqT7eVZ8WX6xLNE-vtlVk/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMDg0MDYwNjYw/LmpwZw.jpeg",
            "resource_url": "https://i.discogs.com/CRG-O4V_AG2w4fHwxpBCDBHqT7eVZ8WX6xLNE-vtlVk/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMDg0MDYwNjYw/LmpwZw.jpeg",
            "uri150": "https://i.discogs.com/8Cc3J8XO_t-2bThBjJyu5MX0jm-MOfdWVmbTVAPXnDI/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMDg0MDYwNjYw/LmpwZw.jpeg",
            "width": 300,
            "height": 300
        },
        {
            "type": "secondary",
            "uri": "https://i.discogs.com/3UUr6Prc-8fKUZ-WKes-BI7J5TuFd0uB01Kw5L4ohIc/rs:fit/g:sm/q:90/h:294/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMDg0MDYwOTQz/LmpwZw.jpeg",
            "resource_url": "https://i.discogs.com/3UUr6Prc-8fKUZ-WKes-BI7J5TuFd0uB01Kw5L4ohIc/rs:fit/g:sm/q:90/h:294/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMDg0MDYwOTQz/LmpwZw.jpeg",
            "uri150": "https://i.discogs.com/D1P2wmgUf55ZfowLq1Szj3sCNb_olEWru3ThU31muPg/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMDg0MDYwOTQz/LmpwZw.jpeg",
            "width": 300,
            "height": 294
        },
        {
            "type": "secondary",
            "uri": "https://i.discogs.com/rESlspu1pyN1Xv1rxCouADHWXRC2-T5AM-M0jFXvakY/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMDg0MDYwOTg4/LmpwZw.jpeg",
            "resource_url": "https://i.discogs.com/rESlspu1pyN1Xv1rxCouADHWXRC2-T5AM-M0jFXvakY/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMDg0MDYwOTg4/LmpwZw.jpeg",
            "uri150": "https://i.discogs.com/y5WJX0K9SPXc7xeCPqlYQfK46tDQI2SDOSENUjuwtEk/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMDg0MDYwOTg4/LmpwZw.jpeg",
            "width": 300,
            "height": 300
        },
        {
            "type": "secondary",
            "uri": "https://i.discogs.com/7fPSdc4qaKzLvJz8_lZ4DvpNmzG5XOoHmIEnSlrxkDE/rs:fit/g:sm/q:90/h:129/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMDg0MDYxMjg2/LmpwZw.jpeg",
            "resource_url": "https://i.discogs.com/7fPSdc4qaKzLvJz8_lZ4DvpNmzG5XOoHmIEnSlrxkDE/rs:fit/g:sm/q:90/h:129/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMDg0MDYxMjg2/LmpwZw.jpeg",
            "uri150": "https://i.discogs.com/lgwsPz0FGGjbWerhhK2p5RBYktnNgYkTlJyRHV3IA4Q/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMDg0MDYxMjg2/LmpwZw.jpeg",
            "width": 500,
            "height": 129
        },
        {
            "type": "secondary",
            "uri": "https://i.discogs.com/xrJMTzTFn1DFwmHIYasKu3W7hgJVU2YXIzsVdp55azs/rs:fit/g:sm/q:90/h:162/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMDg0MDYxMzkw/LmpwZw.jpeg",
            "resource_url": "https://i.discogs.com/xrJMTzTFn1DFwmHIYasKu3W7hgJVU2YXIzsVdp55azs/rs:fit/g:sm/q:90/h:162/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMDg0MDYxMzkw/LmpwZw.jpeg",
            "uri150": "https://i.discogs.com/gs5tJly5AUhiCrau23l1AsTuc7Ejan-KZbLoxaIAWCQ/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMDg0MDYxMzkw/LmpwZw.jpeg",
            "width": 500,
            "height": 162
        },
        {
            "type": "secondary",
            "uri": "https://i.discogs.com/4ysL9gWZH3uNUSaueewMxEkus9d42Q5_dma14YiWg2Y/rs:fit/g:sm/q:90/h:304/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMTI3NjkwNzQ3/LmpwZWc.jpeg",
            "resource_url": "https://i.discogs.com/4ysL9gWZH3uNUSaueewMxEkus9d42Q5_dma14YiWg2Y/rs:fit/g:sm/q:90/h:304/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMTI3NjkwNzQ3/LmpwZWc.jpeg",
            "uri150": "https://i.discogs.com/urouQ-ZmIVF9q8zX7LnEZ0A6akloaBGzzj_rzVePEcs/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMTI3NjkwNzQ3/LmpwZWc.jpeg",
            "width": 300,
            "height": 304
        }
    ],
    "thumb": "https://i.discogs.com/W_9DykM1dax9LIVaOdIBRCK1v34DDN8ZY656KmoHj3M/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MTI4/OC0xMTI3NjkwNzIy/LmpwZWc.jpeg",
    "estimated_weight": 460,
    "blocked_from_sale": false
},
    {},
    {},
  ];

  return (
      <div className='featured-wrapper'>
        <h3>Featured Albums</h3>
        <div className='cover-wrapper'>
          {featured.map((result) => (<ResultCard result={result} key={result.id}/>))}
        </div>
    </div>
  )
}

export default FeaturedAlbums