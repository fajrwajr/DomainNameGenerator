const DomainCreate = {
  pronoun: ["the", "our"],
  adj: ["great", "big"],
  noun: ["jogger", "racoon"]
};

let extension = [".com", ".net", ".gov", ".us"];
function createDomainGenerator(extension) {
  let newArr = "";
  DomainCreate.pronoun.forEach(function(pronoun) {
    DomainCreate.adj.forEach(function(adj) {
      DomainCreate.noun.forEach(function(noun) {
        let result = "<p>" + pronoun + adj + noun + extension + "</p>";
        newArr += result + "\n";
      });
    });
  });
  document.querySelector("#demo").innerHTML = newArr;
}
createDomainGenerator(extension[Math.floor(Math.random() * 4)]);
document.querySelector("#refresh").addEventListener("click", () => {
  let extArr = Math.floor(Math.random() * 4);
  createDomainGenerator(extension[extArr]);
});
