---
title: "Coding with AI: Part 1"
pubDate: 2026-05-06
author: "Michael LeRoux"
tags: ["ai", "claude", "vscode", "web-development"]
---

My experience with using a large language model to help me write code has been surprisingly positive so far, especially given how problematic LLMs can be in most other walks of life. And it's been much more useful than I expected.

I think that's mostly due to how dry software development can be. A lot of the effort involves poring over documentation or discussion threads to figure out why something doesn't work as expected. Unlike other disciplines where using LLMs to be creative is morally questionable, most of my prompts are requests to gather and summarize technical details from various sources and make recommendations based on them. The few times I asked an LLM to do something creative it failed, which makes me feel better about preferring to work through those types of puzzles myself.

It has also been a godsend for helping me resolve a few dozen quality-of-life technical issues, both for web development and macOS in general. I may not always find a solution, but I'm more likely to discover one than when I sifted through a dozen search results. Thankfully, as someone who has been online since before the internet was a thing I have pretty good instincts for when information isn't accurate and comprehensive. That feels even more important now that the source of the information is abstracted away from the user.

My current weapon of choice is [Claude](https://claude.ai/), although [Gemini](https://gemini.google.com/app) has been helpful as well. I recently abandoned the Claude Code extension for Visual Studio Code because I ran into a few limitations that were deal-breakers for me. I was tired of my chat sessions being unavailable to the CLI, the website, or the macOS app because they were confined to single VSCode workspace. And it consistently had trouble modifying its own configuration files in `~/.claude` no matter how much I tweaked the permissions in `~/.claude/settings.json`. I have since switched to using Claude Code in two terminal sessions, one for the project I'm currently working on and the other for whatever web dev and tech questions pop into my head as I go.

I was initially reluctant to experiment with AI because my primary goal was to improve my coding skills, not have some model write everything for me. That's still true, but I've accepted how an LLM can serve as a valuable secondary learning aid when paired with primary sources like video tutorials or documentation. I've also been using it to generate a project plan by feeding it a detailed initial prompt and asking numerous followup questions until I've settled most of the details.
