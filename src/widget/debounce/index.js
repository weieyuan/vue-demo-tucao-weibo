/**
 * Created by destina on 2017/11/1.
 */
export default function debounce(func, wait, context){
  var _context = context;
  var arg;
  var timeOut;

  var oFunWrapper = function(){
    func.apply(_context, arg);
    timeOut = null;
    arg = null;
    _context = null;
  };

  return function(){
    arg = arguments;
    _context = _context || this;
    if(timeOut){
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(oFunWrapper, wait);
  };
}
