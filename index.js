const { createError, json, send } = require('micro');
const marked = require('marked');
const hljs = require('highlight.js');

const defaultOptions = {
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
};

marked.setOptions(Object.assign({
  renderer: new marked.Renderer(),
  highlight(code) {
    return hljs.highlightAuto(code).value;
  },
}, defaultOptions));

module.exports = async function(req, res) {
  if (req.method !== 'POST') {
    throw createError(405, 'Method Not Allowed');
  }

  const { markdown, options } = await json(req);

  if (markdown !== undefined && markdown !== null && typeof markdown !== 'string') {
    throw createError(400, 'Markdown must be a string, null, or undefined.');
  }

  return {
    html: marked(markdown || '', options),
    options: Object.assign(defaultOptions, options),
  };
}
