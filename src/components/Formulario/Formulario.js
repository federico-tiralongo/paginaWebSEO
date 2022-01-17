import './Formulario.css';
export const Formulario = () =>{
    return(
    
            <form class="
            formulario">
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <div type="email" class="form-control" id="email"></div>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <div type="password" class="form-control" id="pwd"></div>
                    </div>
                    <div class="checkbox">
                        <label><div type="checkbox"> Remember me</div></label>
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
            </form>
        
    )
}