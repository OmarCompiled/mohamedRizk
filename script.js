function increment(){
    const counter = document.getElementById("counter");
    let count = +counter.innerHTML;
    counter.innerHTML = count+1; 
}

function changeDuaa(){
    const counter = document.getElementById("counter");
    counter.innerHTML = 0;

    const duaa = document.getElementById("duaa");
    const ogDuaa ="اللهُـمِّ اغْفِـرْ لَهُ وَارْحَمْـه ، وَعافِهِ وَاعْفُ عَنْـه ، وَأَكْـرِمْ نُزُلَـه ، وَوَسِّـعْ مُدْخَـلَه ، وَاغْسِلْـهُ بِالْمـاءِ وَالثَّـلْجِ وَالْبَـرَدْ ، وَنَقِّـهِ مِنَ الْخطـايا كَما نَـقّيْتَ الـثَّوْبَ الأَبْيَـضَ مِنَ الدَّنَـسْ ، وَأَبْـدِلْهُ داراً خَـيْراً مِنْ دارِه ، وَأَهْلاً خَـيْراً مِنْ أَهْلِـه ، وَزَوْجَـاً خَـيْراً مِنْ زَوْجِه ، وَأَدْخِـلْهُ الْجَـنَّة ، وَأَعِـذْهُ مِنْ عَذابِ القَـبْر [وَعَذابِ النّـار]";  
    const duaa1 = "اللهم تجاوز عن سيئاته";
    const duaa2 = "اللهم اجعل قبره روضةً من رياض الجنَّة";

    if(duaa.innerHTML != duaa1 && duaa.innerHTML != duaa2) {
        duaa.innerHTML = duaa1;
    } else if(duaa.innerHTML === duaa1 && duaa.innerHTML != duaa2) {
        duaa.innerHTML = duaa2;
    } else if(duaa.innerHTML === duaa2) {
        duaa.innerHTML = ogDuaa;
    }
   
}