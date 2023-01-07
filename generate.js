const fs = require('fs');
const matter = require('white-matter');

const dir = '../choosealicense-com/_licenses/';

const licenseFiles = fs.readdirSync(dir);


const json = licenseFiles.map((file) => {
  const text = fs.readFileSync(dir + file, 'utf-8');
  const { data, content } = matter(text);
  return {
    ...data,
    content,
  }
});

fs.writeFileSync('licenses.json', JSON.stringify(json));
