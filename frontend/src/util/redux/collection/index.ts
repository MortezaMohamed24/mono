import update from "./update";
import matches from "./query";
import {Querify} from "./query/types";
import {immerable} from "immer";
import {AnySchema} from "./types";


class Collection<Schema extends AnySchema> implements Collection<Schema> {
  _ids: string[] = [];
  _entities: {[key: string]: Schema} = {};


  get ids() {
    return this._ids as readonly string[];
  }

  get entities() {
    return this._entities as {readonly [key: string]: Readonly<Schema>};
  }

  get [immerable](): true {
    return true;
  }


  count(): number {
    return this._ids.length;
  }

  clear(): void {
    this._ids = [];
    this._entities = {};
  }

  findOne(query: string | Querify<Schema>): Schema | undefined {
    if (typeof query === "string") {
      return this._entities[query];
    } 
    
    else {
      const entities = this._entities;
  
      for (let id of this._ids) {
        const entity = entities[id];
  
        if (matches(entity, query)) {
          return entity;
        }
      }
    }
  }

  findMany(query: string[] | Querify<Schema>): Schema[] {
    const ids = this._ids;
    const matched: Schema[] = [];
    const entities = this._entities;


    if (Array.isArray(query)) {
      for (let id of query) {
        if (entities[id]) {
          matched.push(entities[id]);
        }
      }
    } 
    
    else {
      for (let id of ids) {
        const entity = entities[id];
  
        if (matches(entity, query)) {
          matched.push(entity);
        }
      }
    }

    return matched;
  }

  addOne(entity: Schema): Schema {
    if (this._entities[entity.id]) { 
      return this._entities[entity.id]; 
    }

    this._ids.push(entity.id);
    this._entities[entity.id] = entity;
  
    return this._entities[entity.id];
  }

  addMany(entities: Schema[]): Schema[] {
    return entities.map(entity => this.addOne(entity));
  }

  destroyOne(query: string | Querify<Schema>): void {
    const ids = this._ids;
    const count = this.count();
    const entities = this._entities;


    if (typeof query === "string") {
      const index = ids.indexOf(query);

      if (index !== -1) {
        ids.splice(index, 1);
        delete entities[query];
      }
    }


    else {
      for (let i = 0; i < count; i++) {
        if (matches(entities[ids[i]], query)) {
          
          ids.splice(i, 1);
          delete entities[ids[i]];
          break;

        }
      }
    }
  }

  destroyMany(query: string[] | Querify<Schema>): void {
    const ids = this._ids;
    const count = this.count();
    const entities = this._entities;


    if (Array.isArray(query)) {
      for (let id of query) {
        const index = ids.indexOf(id);
        
        if (index !== -1) {
          ids.splice(index, 1);
          delete entities[id];
        }
      }
    }


    else {
      for (let i = 0; i < count; i++) {
        if (matches(entities[ids[i]], query)) {
          
          ids.splice(i, 1);
          delete entities[ids[i]];
  
        }
      }
    }
  }

  updateOne(query: string | Querify<Schema>, changes: Partial<Omit<Schema, "id">>): void {
    const entity = this.findOne(query);

    if (entity) {
      update(entity, changes);
    }
  }

  updateMany(query: string[] | Querify<Schema>, changes: Partial<Omit<Schema, "id">>): void {
    this.findMany(query).forEach(entity => update(entity, changes));
  }
}


export default Collection;