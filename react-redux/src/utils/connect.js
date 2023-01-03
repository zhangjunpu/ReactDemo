import { PureComponent } from "react";

import StoreContext from './context'

/**
 * 连接组件与store属性的方法
 * @author junpu
 * @date 2023-01-03 22:25
 */
export function connect(mapStateToProps, mapDispatchToProps) {
    return function connect(WrapperComponent) {
        class EnhanceComponent extends PureComponent {
            constructor(props, context) {
                super(props);
                this.state = {
                    storeState: mapStateToProps(context.getState())
                }
            }

            componentDidMount() {
                this.unsubscribe = this.context.subscribe(() => {
                    this.setState({
                        storeState: mapStateToProps(this.context.getState())
                    });
                })
            }

            componentWillUnmount() {
                this.unsubscribe();
            }

            render() {
                return (
                    <WrapperComponent
                        {...this.props}
                        {...mapStateToProps(this.context.getState())}
                        {...mapDispatchToProps(this.context.dispatch)} />
                );
            }
        }

        EnhanceComponent.contextType = StoreContext;
        return EnhanceComponent;
    }
}