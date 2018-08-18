interface IService {
  FindByText(text: string): Promise<IModel[]>;
}
