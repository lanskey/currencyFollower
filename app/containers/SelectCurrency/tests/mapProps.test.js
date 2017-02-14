import sinon from 'sinon';
import { mapDispatch } from '../mapProps';

describe('mapProps of <Main />', () => {
  describe('mapDispatchToProps', () => {
    describe('markActive', () => {
      it('should be injected', () => {
        const dispatch = sinon.spy();
        const returned = mapDispatch(dispatch);
        expect(returned.markActive).to.not.eql(undefined);
      });

      it('should dispatch markActive action', () => {
        const dispatch = sinon.spy();
        const returned = mapDispatch(dispatch);

        returned.markActive(1);
        expect(dispatch.calledOnce).to.eql(true);
      });
    });

    describe('addFollowed', () => {
      it('should be injected', () => {
        const dispatch = sinon.spy();
        const returned = mapDispatch(dispatch);
        expect(returned.addFollowed).to.not.eql(undefined);
      });

      it('should dispatch addFollowed action', () => {
        const dispatch = sinon.spy();
        const returned = mapDispatch(dispatch);

        returned.addFollowed(1);
        expect(dispatch.calledOnce).to.eql(true);
      });
    });

    describe('removeFollowed', () => {
      it('should be injected', () => {
        const dispatch = sinon.spy();
        const returned = mapDispatch(dispatch);
        expect(returned.removeFollowed).to.not.eql(undefined);
      });

      it('should dispatch removeFollowed action', () => {
        const dispatch = sinon.spy();
        const returned = mapDispatch(dispatch);

        returned.removeFollowed(1);
        expect(dispatch.calledOnce).to.eql(true);
      });
    });
  });
})


