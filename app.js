let searchinput = document.getElementById("searchinput");
let searchbtn = document.getElementById("searchbtn");


const getdata = async (searchvalue) => {
    let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchvalue}`);
    let jsondata = await data.json();
    console.log("fetch data here",jsondata);

    let div = document.createElement("div");
    div.classList.add("detail");
    div.innerHTML = `
            <h2>Word : <span>${jsondata[0].word}</span></h2>
            <br/>
            <h4> Parts of Speech : ${jsondata[0].meanings[0].partOfSpeech}</h4>
            <br/>

            <h4> Meaning : <span>${jsondata[0].meanings[0].definitions[0].definition}</span></h4>
            <br/>

            <h4>Example : <span>${jsondata[0].meanings[0].definitions[0].example == undefined? "Not Found" :jsondata[0].meanings[0].definitions[0].example  }</span></h4>
            <br/>

            <h4> Synonyms :   <span>${jsondata[0].meanings[0].synonyms}</span></h4>
            <br/>

            <a href=${jsondata[0].sourceUrls[0]} target="_blank">Read More</a>
            <br/>
            <br/>
            <br/>
    `
    document.querySelector(".text").appendChild(div)

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
