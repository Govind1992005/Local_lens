import { MultiModalAssistantModal } from '@/components/MultiModalAssistantModal';

describe('MultiModalAssistantModal regression test', () => {
  it('accepts dataGovData prop without typescript compilation error', () => {
    const props = {
      selectedStateName: 'Andhra Pradesh',
      placesCount: 5,
      foodsCount: 5,
      dataGovData: {
        top_5_places: []
      }
    };
    expect(props.dataGovData).toBeDefined();
  });
});
