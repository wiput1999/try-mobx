import { observable, action, computed } from 'mobx'

export interface MobxStoreInterface {
  name: string
  greeting: string
  setName(name: string): void
}

export class MobxStore implements MobxStoreInterface {
  @observable name = 'World'

  @computed
  public get greeting(): string {
    return `Hello ${this.name}`
  }

  @action.bound
  public setName(name: string): void {
    this.name = name
  }
}

export const mobxStore = new MobxStore()
