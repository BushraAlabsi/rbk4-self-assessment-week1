var Stack = function() {
    this._storage = [];
    this.add = function(){
      this._storage.push(value);
  }
    this.remove = function() {
    	if(this._storage){
      return this._storage.pop();}
      return;
    };
  };