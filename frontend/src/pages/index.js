import {Helmet} from "react-helmet";
const Index = ()  => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <script src="script.js" type="text/javascript"/>
            </Helmet>
            <div id="container">
		    	<h1>Hello World</h1>
	        </div>
        </div>
         
    );
}




export default Index;