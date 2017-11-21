import { Injectable, Injector, ComponentFactoryResolver, EmbeddedViewRef, ApplicationRef } from '@angular/core';

@Injectable()
export class DomHelperService {

  private componentHolder = {};

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  appendComponentToBody(component: any, id: string, context: any) {
    /**
     * Create a component reference from the component.
     */
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    componentRef.instance['context'] = context;


    /**
     * Attach component to the appRef so that it's inside the ng component tree.
     */
    this.appRef.attachView(componentRef.hostView);

    /**
     * Get DOM element from component
     */
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    /**
     * Append DOM element to the body.
     */
    document.body.appendChild(domElem);

    this.componentHolder[id] = componentRef;
  }

  removeComponent(id) {
    this.appRef.detachView(this.componentHolder[id].hostView);
    this.componentHolder[id].destroy();
  }
}
