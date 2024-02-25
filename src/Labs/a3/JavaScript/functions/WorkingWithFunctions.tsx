import ES5Functions from "./ES5Functions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import FunctionDestructing from "./FunctionDestructing";
function WorkingWithFunctions() {
    return(
       <div>
          <ES5Functions/>
          <ArrowFunctions/>
          <ImpliedReturn/>
          <FunctionParenthesisAndParameters/>
          <FunctionDestructing/>
       </div>
    );
 }
 export default WorkingWithFunctions