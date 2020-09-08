const animals = require('./data/animals');
const connection = require('./mongoConnection');

const main = async () => {
  const sasha = await animals.create('Sasha', "dog");
  console.log('Sasha the dog has been added, now she will blog!');
  console.log(sasha);
  id = sasha._id;
  console.log("hahahahha")
  console.log(id);
  console.log(typeof id);
  console.log(await animals.get(id));

  const Lucy = await animals.create('Lucy', "dog");
  console.log(Lucy);
  console.log('Lucy enters the playing field; she is a grizzled ex-cop with a heart of gold.');


  console.log("\n==========================\n");
  console.log("Let's see all the friends!");
  console.log("\n==========================\n");

  const allAnimals = await animals.getAll();
  console.log(allAnimals);

  console.log("\n==========================\n")
  console.log("New friend is here!");
  console.log("\n==========================\n");

  const Duke = await animals.create('Duke', "Walrus");
  console.log(Duke);
  console.log("Duke shows up!!");

  console.log("\n==========================\n");
  console.log("Our friend sasha now has new name Sashita!");
  console.log("\n==========================\n");

  const new_name = await animals.rename(sasha._id, "Sashita");

  console.log("Let's meet Sashita");
  console.log(new_name);

  console.log("\n==========================\n");
  console.log("Our friend Lucy is not here!");
  console.log("\n==========================\n");

  const removeFriend = await animals.remove(Lucy._id);

  console.log("\n==========================\n");
  console.log("Let's see all the friends!");
  console.log("\n==========================\n");

  const newGroup = await animals.getAll();
  console.log(newGroup);

  const db = await connection();
  await db.serverConfig.close();

  console.log('Done!');
};

main().catch((error) => {
  console.log(error);
});
