import Parser from 'tree-sitter';
import Cpp from 'tree-sitter-cpp';

const parser = new Parser();
parser.setLanguage(Cpp); // Should not throw
console.log('Language loaded successfully');
