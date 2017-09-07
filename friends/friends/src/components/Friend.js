import React from 'react';

export default class Friend extends React.Component {
    handleMoreInfo(e) {
        this.infoRef.className === "show-less" ? this.infoRef.className = "show-more" : this.infoRef.className = "show-less";
        this.infoRef2.className === "show-less" ? this.infoRef2.className = "show-more" : this.infoRef2.className = "show-less";        
        e.target.innerHTML === "More" ? e.target.innerHTML = "Less" : e.target.innerHTML = "More";
      }
    render(props) {
        return (
            <li><form className="friend" onSubmit={(e) => this.props.handleChangeFriend(e, this.props.i)}>
                <button className="more-info" type="button" onClick={this.handleMoreInfo.bind(this)}>More</button>
                <div className="info-box">
                    <div className="labels">
                    <label className="lab">name</label>
                    <div ref={e => this.infoRef2 = e} className="show-less" >
                    <label className="lab">age</label>
                    <label className="lab">email</label>
                    </div>
                    </div>
                    <div className="info">
                        <input type="reset" 
                            onBlur={this.props.handleBlur} 
                            onClick={this.props.handleClick} 
                            className="input-name" 
                            defaultValue={this.props.name} 
                            name="name"/>
                        <div ref={e => this.infoRef = e} className="show-less" >
                            <input type="reset" 
                                onBlur={this.props.handleBlur} 
                                onClick={this.props.handleClick} 
                                defaultValue={this.props.age} 
                                className="input-name"
                                name="age"/>
                            <input type="reset" 
                                onBlur={this.props.handleBlur} 
                                onClick={this.props.handleClick} 
                                defaultValue={this.props.email} 
                                className="input-name"
                                name="email"/>
                        </div>
                    </div>
                    <button className="delete" type="reset" onClick={(e) => this.props.handleDeleteFriend(e, this.props.i)}></button><br/>

                    </div>
                </form>
            </li>
        )
    }
}