//Grooscript converted file
function TodoAppFinal() {
  var gSobject = gs.inherit(gs.baseClass,'TodoAppFinal');
  gSobject.clazz = { name: 'react.TodoAppFinal', simpleName: 'TodoAppFinal'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.todos = null;
  gSobject.actualTodo = null;
  gSobject.gQuery = GQueryImpl();
  gSobject.selector = null;
  gSobject['init'] = function(it) {
    gSobject.todos = gs.list([]);
    return gSobject.actualTodo = "";
  }
  gSobject['actualTodoChange'] = function(actualTodoValue) {
    return gs.mc(gSobject,"setActualTodo",[actualTodoValue]);
  }
  gSobject['addTodoClick'] = function(it) {
    if (gs.bool(gSobject.actualTodo)) {
      gs.mc(gSobject.todos,'leftShift', gs.list([gSobject.actualTodo]));
      return gs.mc(gSobject,"setActualTodo",[""]);
    };
  }
  gSobject['render'] = function(it) {
    return gs.mc(gSobject.gQuery,"html",[gSobject.selector, gs.execStatic(HtmlBuilder,'build', this,[function(it) {
      return gs.mc(this,"div",[function(it) {
        gs.mc(this,"h3",["TODO"], gSobject);
        return gs.mc(this,"ul",[function(it) {
          gs.mc(gSobject.todos,"each",[function(it) {
            return gs.mc(this,"li",[it], gSobject);
          }]);
          return gs.mc(this,"li",[function(it) {
            gs.mc(this,"input",[gs.map().add("type","text").add("id","actualTodo").add("value",gSobject.actualTodo)], gSobject);
            return gs.mc(this,"input",[gs.map().add("type","button").add("id","addTodo").add("value","Add #" + (gs.mc(gSobject.todos,"size",[])) + "")], gSobject);
          }], gSobject);
        }], gSobject);
      }], gSobject);
    }])]);
  }
  gSobject.bindInput = function(selector, closure) {
    $(selector).bind('input', function() {
            var currentVal = $(this).val();
            if (closure) { closure(currentVal); };
        });
  }
  gSobject.focus = function(selector) {
    var input = $(selector);
        var originalValue = input.val();
        input.val('');
        input.blur().focus().val(originalValue);
  }
  gSobject['bindEvents'] = function(it) {
    gs.mc(gSobject,"bindInput",["#actualTodo", gSobject["actualTodoChange"]]);
    return gs.mc(gSobject.gQuery,"bindEvent",["addTodo", "click", gSobject["addTodoClick"]]);
  }
  gSobject['setActualTodo'] = function(value) {
    gs.println(gs.plus("New actualTodo: ", value));
    gSobject.actualTodo = value;
    gs.mc(gSobject,"start",[]);
    return gs.mc(gSobject,"focus",["#actualTodo"]);
  }
  gSobject['setTodos'] = function(value) {
    gs.println(gs.plus("New todo: ", value));
    gSobject.todos = value;
    return gs.mc(gSobject,"start",[]);
  }
  gSobject['start'] = function(it) {
    gs.mc(gSobject,"render",[]);
    return gs.mc(gSobject,"bindEvents",[]);
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};


var renderComponent = function(component, selector) {
  gs.mc(component,"init",[]);
  gs.sp(component,"selector",selector);
  var gQuery = GQueryImpl();
  return gs.mc(gQuery,"onReady",[function(it) {
    return gs.mc(component,"start",[]);
  }]);
};
(renderComponent.delegate!=undefined?gs.applyDelegate(renderComponent,renderComponent.delegate,[TodoAppFinal(), "#todos"]):gs.execCall(renderComponent, this, [TodoAppFinal(), "#todos"]));
