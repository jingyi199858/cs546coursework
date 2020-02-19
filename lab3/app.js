
//Yi Jing
//Feb 17 2020
const fileData = require("./fileData");
const textMetrics = require("./textMetrics");
const fse = require('fs-extra');

async function getFiles(){
	try {
		const fileList = await fse.readdir('.');
		return fileList.filter(file => {
			if (file.match(/chapter\d*.txt/g)) {
				return file;
			}
		});
	} catch (err) {
		console.error(err);
		return ['chapter1.txt', 'chapter2.txt', 'chapter3.txt'];
	}
};

async function getMetrics(){
	try {
		const FILE_LIST = await getFiles();
		for (file in FILE_LIST) {
			const files = FILE_LIST[file];
			const json_file = files.replace('.txt', '.result.json');
			if (!await fse.pathExists(json_file)) {
				const text_file = files.replace('.txt', '.replica.txt');
				const text = await fileData.getFileAsString(files);
				await fileData.saveStringToFile(text_file, text);
				await fileData.saveJSONToFile(json_file, textMetrics.createMetrics(text));
			}
			console.log(await fileData.getFileAsString(json_file));
		}
	} catch (err) {
		throw err;
	}
};

getMetrics();