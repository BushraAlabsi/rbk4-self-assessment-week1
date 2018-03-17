## Data Structures
* [ ] Describe the difference between a stack and a queue and give examples of when you might use them.

## Queue vs. Stack
Please write your explanation below.

the main differnce between stack and queue is that stack is a FILO (means first in last out)data structire which means you can retrieve only the value from the end of the stack(the last thing you've added), while the queue is a FIFO (means first in first out) data structure you can retrieve or remove the value the in hte beginning of the queue (the first value you've added and havn't removed yet).
example:
var queue = [];
queue.add(3); //queue is [3] now
queue.add(6); //queue is [3,6] now
queue.add(9); //queue is [3,6,9] now
queue.remove(); queue is [6,9] now
queue.remove(); queue is [9] now



var stack = [];
stack.add(3); //stack is [3] now
stack.add(6); //stack is [3,6] now
stack.add(9); //stack is [3,6,9] now
stack.remove(); stack is [3,6] now
stack.remove(); stack is [3] now
