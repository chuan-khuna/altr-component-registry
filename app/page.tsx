import * as React from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world";
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form";
import PokemonPage from "@/registry/new-york/blocks/complex-component/page";
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card";

import {
  ComponentWrapper,
  Title,
  Showcase,
} from "@/components/component-wrapper";

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <ComponentWrapper>
          <Title>A simple hello world component</Title>
          <Showcase>
            <HelloWorld />
          </Showcase>
        </ComponentWrapper>

        <ComponentWrapper>
          <Title>A simple form with validation</Title>
          <Showcase>
            <ExampleForm />
          </Showcase>
        </ComponentWrapper>

        <ComponentWrapper>
          <Title>A complex component showing hooks, libs and components</Title>
          <Showcase>
            <PokemonPage />
          </Showcase>
        </ComponentWrapper>

        <ComponentWrapper>
          <Title>A login form with a CSS file.</Title>
          <Showcase>
            <ExampleCard />
          </Showcase>
        </ComponentWrapper>
      </main>
    </div>
  );
}
