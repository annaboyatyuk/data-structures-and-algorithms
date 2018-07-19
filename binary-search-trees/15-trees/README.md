

implement a Tree Constructor
implement insert(node) and remove(node) methods on the class
implement find(node) methods on the class
implement serialize() and deserialize() methods on the class
Why? You cannot simply use JSON.stringify and JSON.parse because your tree will be made up of class instances. For that reason, you'll need to concoct a way to traverse the tree into a structure that you can run through JSON.parse/stringify. One idea might be to do a traversal, building up an object literal with all of the right references, or perhaps an in-order array that simply notes all of the node values and links...



in your README, write documentation for you data structures
your documentation should includes code block useage examples
provide instructions for:
installing and using your data structure
accessing each method
running your tests

