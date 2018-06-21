import React, {PureComponent} from 'react';
import {CheckBox} from 'react-native-elements';
import {colorPrimaryDark, colorGreyLight1} from '../../assets/base';

export default class SelectItem extends PureComponent {
    state = {
        checked: false
    }

    //temporary
    componentDidMount () {
        const index = this.props.options.findIndex(item => item === this.props.item);
        if(index > -1){
            this.setState({checked: true})
        }
    }

    change = () => { 
        this.props.update(true);

        if(this.state.checked){
            this.props.remove(this.props.item);
        } else{
            this.props.add(this.props.item);
        }
         
        this.setState({checked: !this.state.checked});  
    }
    render () {
        const title = this.props.item.charAt(0).toUpperCase() + this.props.item.slice(1);
        return (
            <CheckBox
            uncheckedColor={colorGreyLight1}
            textStyle={{color: colorGreyLight1, fontSize: 16, fontWeight: 'normal'}}
            checkedColor={colorPrimaryDark}
            title={title}
            checked={this.state.checked}
            onPress={this.change}
            containerStyle={{borderRadius: 0, backgroundColor: 'transparent', borderColor: 'transparent'}}
            />
        );
    }
}