let searchinput = document.getElementById("searchinput");
let searchbtn = document.getElementById("searchbtn");


const getdata = async (searchvalue) => {
    let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchvalue}`);
    let jsondata = await data.json();
    console.log("fetch data here",jsondata);

   document.querySelector(".text").innerHTML = `
            <h2>Word : <span>${jsondata[0].word}</span></h2>
            <br/>
            <p> Parts of Speech : ${jsondata[0].meanings[0].partOfSpeech}</p>
            <br/>

            <p> Meaning : <span>${jsondata[0].meanings[0].definitions[0].definition}</span></p>
            <br/>

            <p>Example : <span>${jsondata[0].meanings[0].definitions[0].example == undefined? "Not Found" :jsondata[0].meanings[0].definitions[0].example  }</span></p>
            <br/>

            <p> Synonyms : <span style="word-wrap: break-word;">${jsondata[0].meanings[0].synonyms}</span></p>
            <br/>

            <a href=${jsondata[0].sourceUrls[0]} target="_blank">Read More</a>
            <br/>
            <br/>
            <br/>
    `

    console.log(jsondata);
    console.log(jsondata[0].word);
    console.log(jsondata[0].meanings[0].definitions[0].definition      );
}

searchbtn.addEventListener('click', function () {
    let searchvalue = searchinput.value;

    if (searchvalue == "") {
        alert("First Enter a Word")
    } else {
        getdata(searchvalue);
    }

})
