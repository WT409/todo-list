//import axios from "axios";
const textArea = document.querySelector("#inputText #text");
const lists = document.querySelector("#lists");
const url = "http://localhost:3001/lists"; // json-server -w data.json

function addLoad() {
    axios
        .get(url)
        .then((response) => {
            response.data.forEach((text, i) => {
                const textElement = text.text;
                const id = text.id;

                lists.innerHTML += `
                    <div class="list">
                        <input type="checkbox" id="checkbox" class="checkbox">
                        <span class="check"></span>
                        <span class="text">${textElement}</span>
                            <div class="removeList" onclick="removeToList(${id})">
                                <svg
                            clip-rule="evenodd"
                        fill-rule="evenodd"
                        stroke-linejoin="round"
                        stroke-miterlimit="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
                        fill-rule="nonzero"
                        fill="#394375"/>
                    </svg>
                </div>
            </div>`;
            });
        })
        .catch((error) => {
            console.log(error);
        });
}
addLoad();

function addToList() {
    lists.innerHTML += `
        <div class="list">
            <span class="text">${textArea.value}</span>
                <div class="removeList">
                    <svg
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        stroke-linejoin="round"
                        stroke-miterlimit="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
                        fill-rule="nonzero"
                        fill="#394375"/>
                    </svg>
                </div>
            </div>`;

    axios.post(url, { text: `${textArea.value}` }).catch((error) => {
        alert(error);
    });
}

function removeToList(id) {
    axios.delete(`${url}/${id}`).catch((error) => {
        console.log(error);
    });
}
