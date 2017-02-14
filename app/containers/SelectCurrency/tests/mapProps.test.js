import sinon from 'sinon';
import { mapDispatch } from '../mapProps';

describe('mapProps of <Main />', () => {
  describe('mapDispatchToProps', () => {
    describe('addWelcome', () => {
      it('should be injected', () => {
        const dispatch = sinon.spy();
        const returned = mapDispatch(dispatch);
        expect(returned.markActive).to.not.eql(undefined);
      });

      it('should dispatch addWelcome action', () => {
        const dispatch = sinon.spy();
        const returned = mapDispatch(dispatch);

        returned.markActive(1);
        expect(dispatch.calledOnce).to.eql(true);
      });
    });
  });
})


