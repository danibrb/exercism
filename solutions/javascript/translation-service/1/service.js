/// <reference path="./global.d.ts" />
// @ts-check

import { AbusiveClientError, NotAvailable, Untranslatable } from './errors';

export class TranslationService {
  constructor(api) {
    this.api = api;
  }

  free(text) {
    return this.api.fetch(text).then((result) => result.translation);
  }

  batch(texts) {
    if (texts.length === 0) {
      return Promise.reject(new BatchIsEmpty());
    }
    return Promise.all(texts.map(this.free.bind(this)));
  }

  request(text) {
    const promisify = () => new Promise((resolve, reject) => {
      this.api.request(text, (result) => {
        result ? reject(result) : resolve();
      });
    });

    return promisify()
      .catch(promisify)
      .catch(promisify);
  }

  premium(text, minimumQuality) {
    return this.api.fetch(text)
      .catch(() => {
        return this.request(text).then(() => this.api.fetch(text));
      })
      .then((result) => {
        if (result.quality < minimumQuality) {
          throw new QualityThresholdNotMet(text);
        }
        return result.translation;
      });
  }
}

export class QualityThresholdNotMet extends Error {
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim()
    );
    this.text = text;
  }
}

export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim()
    );
  }
}
