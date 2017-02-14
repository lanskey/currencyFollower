import sinon from 'sinon';
import { mapDispatch } from '../mapProps';

describe('mapProps of <Main />', () => {
  describe('mapDispatchToProps', () => {
    describe('addWelcome', () => {
      it('should be injected', () => {
        const dispatch = sinon.spy();
        const returned = mapDispatch(dispatch);
        expect(returned.addWelcome).to.not.eql(undefined);
      });

      it('should dispatch onChangeTrend action', () => {
        const dispatch = sinon.spy();
        const returned = mapDispatch(dispatch);

        returned.addWelcome(1);
        expect(dispatch.calledOnce).to.eql(true);
      });
    });
  });
})


