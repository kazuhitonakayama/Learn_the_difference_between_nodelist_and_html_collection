function addElement() {
  const targetParent = document.getElementById('incrementofdivs');
  const collection = document.getElementsByClassName('targetelement');
  const collectionCountArea = document.getElementById('collectionCounter');


  const element = document.createElement('p');
  element.textContent = "ヤッホー！";
  element.classList.add('targetelement');
  targetParent.appendChild(element);
  const collectionCount = collection.length;
  collectionCountArea.textContent = collectionCount;
}

function addElement2() {
  const targetParent2 = document.getElementById('incrementofdivs2');
  const collection2 = document.querySelectorAll('targetelement2');
  const collectionCountArea = document.getElementById('nodeListCounter');


  const element = document.createElement('p');
  element.textContent = "ヤッホー！";
  element.classList.add('targetelement2');
  targetParent2.appendChild(element);
  const collectionCount = collection2.length;
  collectionCountArea.textContent = collectionCount;
}
