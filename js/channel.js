let player = document.getElementById("player");
let back = document.getElementById("back");
let play = document.getElementById("play");
let next = document.getElementById("next");
let title = document.getElementById("title");
let main = document.getElementById("main");
main.style.height = screen.height + "px";
let label = [];
let channel = [];
//let url = "http://192.168.1.107/myphp/study/advanced/api-with-php-js/5/Radio-Stations/add-read.php";
//let url2 = "./add-read.php";
//let url3 = "./channels.json";

var channelJson = [
    {
        "id": "1",
        "RadioName": "\u0631\u0627\u062f\u064a\u0648 \u0645\u0635\u0631",
        "RadioType": "\u0631\u0627\u062f\u064a\u0648 \u0645\u0646\u0648\u0639\u0627\u062a \u0648\u0628\u0631\u0627\u0645\u062c \u0648\u0623\u062e\u0628\u0627\u0631 \u0645\u0646 \u0645\u0635\u0631",
        "RadioUrl": "https:\/\/live.radiomasr.net\/RADIOMASR"
    },
    {
        "id": "2",
        "RadioName": "\u0645\u064a\u062c\u0627 \u0627\u0641 \u0627\u0645",
        "RadioType": " \u0645\u0646\u0648\u0639\u0627\u062a \u0648\u0628\u0631\u0627\u0645\u062c \u0645\u0635\u0631\u064a\u0629",
        "RadioUrl": "http:\/\/nebula.shoutca.st:8211\/;stream.mp3"
    },
    {
        "id": "3",
        "RadioName": "\u0631\u0627\u062f\u064a\u0648 9090",
        "RadioType": "\u0645\u0646\u0648\u0639\u0627\u062a \u0648\u0628\u0631\u0627\u0645\u062c \u062d\u0648\u0627\u0631\u064a\u0629 \u0645\u0635\u0631\u064a\u0629",
        "RadioUrl": "https:\/\/9090streaming.mobtada.com\/9090FMEGYPT"
    },
    {
        "id": "4",
        "RadioName": "\u0646\u062c\u0648\u0645 \u0627\u0641 \u0627\u0645",
        "RadioType": "\u0645\u0646\u0648\u0639\u0627\u062a \u0648\u0623\u063a\u0627\u0646\u064a \u0645\u0635\u0631\u064a\u0629",
        "RadioUrl": "https:\/\/ice1.securenetsystems.net\/DEMOSTN?playSessionID=13A185D6-B3D2-4D50-B83EDCD803195E40"
    },
    {
        "id": "5",
        "RadioName": "\u0627\u0644\u0645\u063a\u062a\u0631\u0628\u0648\u0646 \u0627\u0644\u0639\u0631\u0628",
        "RadioType": "\u0645\u0646\u0648\u0639\u0627\u062a \u0648\u0623\u063a\u0627\u0646\u064a \u0639\u0631\u0628\u064a\u0629 \u0644\u0644\u0645\u063a\u062a\u0631\u0628\u064a\u0646 \u062a\u0628\u062b \u0645\u0646 \u0623\u0645\u0631\u064a\u0643\u0627",
        "RadioUrl": "http:\/\/198.178.123.23:8334\/;stream\/1"
    },
    {
        "id": "6",
        "RadioName": "\u0627\u0630\u0627\u0639\u0629 \u0642\u0631\u0621\u0627\u0646 \u0643\u0631\u064a\u0645 \u0627\u0644\u062c\u0632\u0627\u0626\u0631",
        "RadioType": "\u0627\u0630\u0627\u0639\u0629 \u0627\u0644\u0642\u0631\u0621\u0627\u0646 \u0627\u0644\u0643\u0631\u064a\u0645 \u0627\u0644\u0631\u0633\u0645\u064a\u0629 \u0645\u0646 \u0627\u0644\u062c\u0632\u0627\u0626\u0631",
        "RadioUrl": "https://webradio.tda.dz/Coran_64K.mp3"
    },
    {
        "id": "7",
        "RadioName": "\u0642\u0631\u0621\u0627\u0646 \u0643\u0631\u064a\u0645 \u0628\u0635\u0648\u062a \u0627\u0644\u062d\u0635\u0631\u064a",
        "RadioType": "\u0627\u0630\u0627\u0639\u0629 \u0642\u0631\u0621\u0627\u0646 \u0643\u0631\u064a\u0645 \u062e\u0627\u0635\u0629 -- \u0628\u0635\u0648\u062a \u0627\u0644\u062d\u0635\u0631\u064a",
        "RadioUrl": "http:\/\/199.180.72.2:8130\/;"
    },
    {
        "id": "8",
        "RadioName": "\u0627\u0630\u0627\u0639\u0629 \u0642\u0631\u0621\u0627\u0646 \u0643\u0631\u064a\u0645 \u0646\u0627\u0628\u0644\u0633",
        "RadioType": "\u0627\u0630\u0627\u0639\u0629 \u0642\u0631\u0621\u0627\u0646 \u0643\u0631\u064a\u0645 \u0645\u0646 \u0646\u0627\u0628\u0644\u0633",
        "RadioUrl": "http:\/\/www.quran-radio.org:8080\/;stream.mp3"
    },
    {
        "id": "9",
        "RadioName": "\u0627\u0644\u0634\u0628\u0643\u0629 \u0627\u0644\u0643\u0644\u0627\u0633\u064a\u0643\u064a\u0629",
        "RadioType": "\u0645\u0648\u0633\u064a\u0642\u0649 \u0643\u0644\u0627\u0633\u064a\u0643\u064a\u0629 \u0639\u0627\u0644\u0645\u064a\u0629",
        "RadioUrl": "http:\/\/wpr-ice.streamguys.net\/wpr-hd2-mp3-96"
    },
    {
        "id": "10",
        "RadioName": "\u0645\u0648\u0633\u064a\u0642\u0649 \u0645\u0646\u0648\u0639\u0629",
        "RadioType": "\u0645\u0648\u0633\u064a\u0642\u0649 \u0645\u0646\u0648\u0639\u0629",
        "RadioUrl": "https:\/\/wpr-ice.streamguys1.com\/wpr-music-aac-56"
    },
    {
        "id": "11",
        "RadioName": "\u0645\u0648\u0633\u064a\u0642\u0649 \u0627\u0644\u062c\u0627\u0632 \u0648\u0627\u0644\u0628\u0644\u0648\u0632",
        "RadioType": "\u062c\u0627\u0632 -- \u0628\u0644\u0648\u0632 -- \u0645\u0648\u0633\u064a\u0642\u0649 \u0648\u0623\u063a\u0627\u0646\u064a",
        "RadioUrl": "http:\/\/us3.internet-radio.com:8342\/stream?type=http&nocache=3"
    },
    {
        "id": "12",
        "RadioName": "\u0631\u0627\u062f\u064a\u0648 \u0645\u0646\u0648\u0639\u0627\u062a",
        "RadioType": "\u0645\u0646\u0648\u0639\u0627\u062a \u063a\u0631\u0628\u064a\u0629",
        "RadioUrl": "http:\/\/uk5.internet-radio.com:8237\/stream?type=http&nocache=924"
    },
    {
        "id": "13",
        "RadioName": "\u0631\u0627\u062f\u064a\u0648 \u0627\u0646\u062a\u0631\u0646\u062a \u0643\u0627\u0641\u064a\u0647",
        "RadioType": "\u0623\u063a\u0627\u0646\u064a \u0648\u0645\u0648\u0633\u064a\u0642\u0649 \u0642\u062f\u064a\u0645\u0629 \u0648\u062e\u0641\u064a\u0641\u0629 \u063a\u0631\u0628\u064a\u0629",
        "RadioUrl": "http:\/\/us2.internet-radio.com:8443\/stream?type=http&nocache=216938"
    },
    {
        "id": "14",
        "RadioName": "\u0631\u0627\u062f\u064a\u0648 \u0627\u0633\u062a\u0634\u0641\u0627\u0626\u064a",
        "RadioType": "\u0645\u0648\u0633\u064a\u0642\u0649 \u0627\u0633\u062a\u0634\u0641\u0627\u0626\u064a\u0629 \u062a\u0635\u0644\u062d \u0644\u0644\u062a\u0631\u0643\u064a\u0632 \u0648\u0627\u0644\u0639\u0644\u0627\u062c",
        "RadioUrl": "http:\/\/94.23.252.14:8047\/;stream\/1"
    },
    {
        "id": "15",
        "RadioName": "\u0643\u0644\u0627\u0633\u064a\u0643 + \u062c\u064a\u062a\u0627\u0631",
        "RadioType": "\u0643\u0644\u0627\u0633\u064a\u0643 + \u062c\u064a\u062a\u0627\u0631",
        "RadioUrl": "http:\/\/192.99.35.215:5338\/;stream\/1"
    },
    {
        "id": "16",
        "RadioName": "\u0643\u0644\u0627\u0633\u064a\u0643 \u062c\u064a\u062a\u0627\u06312",
        "RadioType": "\u0643\u0644\u0627\u0633\u064a\u0643 \u062c\u064a\u062a\u0627\u0631",
        "RadioUrl": "http:\/\/23.82.11.89:2728\/;stream\/1"
    },
    {
        "id": "17",
        "RadioName": "\u0645\u0648\u0633\u064a\u0642\u0649 \u0627\u0644\u0631\u064a\u0641",
        "RadioType": "\u0645\u0648\u0633\u064a\u0642\u0649 \u0627\u0644\u0631\u064a\u0641 \u0627\u0644\u063a\u0631\u0628\u064a",
        "RadioUrl": "https:\/\/uk3.internet-radio.com\/proxy\/majesticjukebox?mp=\/live"
    },
    {
        "id": "18",
        "RadioName": "راديو ماجيستيك القديم",
        "RadioType": "\u0645\u0648\u0633\u064a\u0642\u0649 \u0648\u0623\u063a\u0627\u0646\u064a \u0645\u0646 \u0643\u0648\u0628\u0627 -- \u0623\u0645\u0631\u064a\u0643\u0627 \u0627\u0644\u062c\u0646\u0648\u0628\u064a\u0629 -- \u0635\u0627\u0644\u0635\u0627",
        "RadioUrl": "https://uk3.internet-radio.com/proxy/majesticjukebox?mp=/live"
    },
    {
        "id": "19",
        "RadioName": "راديو ميامي موسيقى الروك",
        "RadioType": "\u0623\u063a\u0627\u0646\u064a \u0648\u0645\u0648\u0633\u064a\u0642\u0649 \u063a\u0631\u0628\u064a\u0629 \u0642\u062f\u064a\u0645\u0629 -- \u0631\u0648\u0643 -- \u0628\u0644\u0648\u0632 -- \u062c\u0627\u0632",
        "RadioUrl": "https://uk2.internet-radio.com/proxy/classicrockmiami?mp=/stream;"
    },
    {
        "id": "20",
        "RadioName": "راديو توب 80 منوعات",
        "RadioType": "\u0645\u0648\u0633\u064a\u0642\u0649 \u0627\u0644\u062c\u0627\u0632",
        "RadioUrl": "https://uk5.internet-radio.com/proxy/top80radio?mp=/stream;"
    },
    {
        "id": "21",
        "RadioName": "\u0645\u0648\u0633\u064a\u0642\u0649 \u0628\u064a\u0627\u0646\u0648 1",
        "RadioType": "\u0628\u064a\u0627\u0646\u0648",
        "RadioUrl": "https:\/\/us2.internet-radio.com\/proxy\/mattjohnsonradio?mp=\/stream;"
    },
    {
        "id": "22",
        "RadioName": "\u0645\u0648\u0633\u064a\u0642\u0649 \u0628\u064a\u0627\u0646\u0648 2",
        "RadioType": "\u0628\u064a\u0627\u0646\u0648",
        "RadioUrl": "http:\/\/104.251.118.50:8626\/;stream\/1"
    },
    {
        "id": "23",
        "RadioName": "\u0645\u0648\u0633\u064a\u0642\u0649 \u0628\u064a\u0627\u0646\u0648 3",
        "RadioType": "\u0628\u064a\u0627\u0646\u0648",
        "RadioUrl": "http:\/\/23.82.11.88:10800\/;stream\/1"
    },
    {
        "id": "24",
        "RadioName": "\u0631\u0627\u062f\u064a\u0648 \u0647\u0644\u0627 \u0627\u0644\u0623\u0631\u062f\u0646\u064a",
        "RadioType": "\u0645\u0646\u0648\u0639\u0627\u062a \u0623\u0631\u062f\u0646\u064a\u0629 - \u0639\u0631\u0628\u064a\u0629",
        "RadioUrl": "http:\/\/104.194.9.142:8023\/;stream\/1"
    }
];

//console.log(channelJson);
channelJson.forEach(element => {
    //console.log(element.RadioName)
    label.push('<center><div style="width: 30px; height: 30px; box-sizing:border-box; padding:4px; margin-bottom:2px; background-color:aqua; color:black; border:none; border-radius:4px; box-shadow:1px 1px 3px black inset; ">' + (0 + element.id).slice(-2) + "</div></center>" + element.RadioName);
        channel.push(element.RadioUrl);
});

/* fetch("./channels.json").then(response => response.json()).then(data => {
    // console.log(data);
    data.forEach(element => {
        label.push('<center><div style="width: 30px; height: 30px; box-sizing:border-box; padding:4px; margin-bottom:2px; background-color:aqua; color:black; border:none; border-radius:4px; box-shadow:1px 1px 3px black inset; ">' + (0 + element.id).slice(-2) + "</div></center>" + element.RadioName);
        channel.push(element.RadioUrl);

      }); */

    let c;
    if (localStorage.getItem("CHANNEL") !== undefined) {
        if (localStorage.getItem("CHANNEL") != null) {
            c = localStorage.getItem("CHANNEL");
        } else {
            c = 0;
        }
    } else {
        c = 0;
    }
    localStorage.setItem("CHANNEL", c);
    if (localStorage.getItem("CHANNEL") != null) {
        c = localStorage.getItem("CHANNEL");
    } else {
        c = 0;
    }
    player.src = channel[c];
    title.innerHTML = label[c];
    var isplayed = false;

    next.addEventListener("click", () => {
        if (c < channel.length - 1) {
            c++;
            localStorage.setItem("CHANNEL", c);
            player.src = channel[c];
            title.innerHTML = label[c];
            if (isplayed == true) {
                player.play();
                isplayed = true;
                play.src = "./img/pause.png";
            }


        } else {
            c = 0;
            localStorage.setItem("CHANNEL", c);
            player.src = channel[c];
            title.innerHTML = label[c];
            if (isplayed == true) {
                player.play();
                isplayed = true;
                play.src = "./img/pause.png";
            }

        }
    });
    back.addEventListener("click", () => {
        if (c <= channel.length - 1 && c != 0) {
            c--;
            localStorage.setItem("CHANNEL", c);
            player.src = channel[c];
            title.innerHTML = label[c];
            if (isplayed == true) {
                player.play();
                isplayed = true;
                play.src = "./img/pause.png";
            }

        } else {
            c = channel.length - 1;
            localStorage.setItem("CHANNEL", c);
            player.src = channel[c];
            title.innerHTML = label[c];
            if (isplayed == true) {
                player.play();
                isplayed = true;
                play.src = "./img/pause.png";
            }

        }
    });

    player.addEventListener("play", () => {
        isplayed = true;
        play.src = "./img/pause.png";
    });

    player.addEventListener("pause", () => {
        //if (player.paused == false) {} No need
        isplayed = false;
        play.src = "./img/play.png";
    });

    play.addEventListener("click", () => {
        if (isplayed == false) {
            player.play();
            isplayed = true;
            play.src = "./img/pause.png";
        } else if (isplayed == true) {
            player.pause();
            isplayed = false;
            play.src = "./img/play.png";
        }
    });

/*}).catch(error => {
    console.log(error);
})*/


